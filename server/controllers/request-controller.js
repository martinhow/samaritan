const { ObjectId } = require("mongodb");
const requestModel = require("../models/request");

const postUserRequest = async (ctx, next) => {
  try {
    const userId = ctx.params.id;
    const body = ctx.request.body;

    const requestObj = {
      title: body.title,
      description: body.description,
      perk: body.perk,
      start_date: body.start_date,
      end_date: body.end_date,

      created_by: userId,
      status: "OPEN",
    };

    const doc = await requestModel.create(requestObj);
    ctx.body = doc; // this will update the ctx.response.body in server response
    ctx.status = 201;
    console.log("ctx", ctx);
  } catch (error) {
    console.log("error", error);
    ctx.status = 500;
  }
};

const getUserRequests = async (ctx, next) => {
  try {
    const userId = ctx.params.id;
    const body = await requestModel.find({ created_by: ObjectId(userId) });

    ctx.body = body; // this will update the ctx.response.body in server response
    ctx.status = 201;
    console.log("ctx", ctx);
  } catch (error) {
    console.log("error", error);
    ctx.status = 500;
  }
};

const getRequest = async (ctx, next) => {
  try {
    const requestId = ctx.params.id;
    const body = await requestModel.findById(requestId);

    ctx.body = body; // this will update the ctx.response.body in server response
    ctx.status = 201;
    console.log("ctx", ctx);
  } catch (error) {
    console.log("error", error);
    ctx.status = 500;
  }
};

const updateRequest = async (ctx, next) => {
  try {
    const requestId = ctx.params.id;
    const body = await requestModel.findOneAndUpdate(
      { _id: ObjectId(requestId) },
      ctx.request.body,
      { new: true }
    );

    ctx.body = body; // this will update the ctx.response.body in server response
    ctx.status = 201;
    console.log("ctx", ctx);
  } catch (error) {
    console.log("error", error);
    ctx.status = 500;
  }
};

module.exports = {
  postUserRequest,
  getUserRequests,
  getRequest,
  updateRequest,
};
