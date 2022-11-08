const { ObjectId } = require("mongodb");
const itemModel = require("../models/item");

const postUserItem = async (ctx, next) => {
  try {
    const userId = ctx.params.id;
    const body = ctx.request.body;

    const itemObj = {
      name: body.title,
      description: body.description,
      owner_id: userId,
      request_id: body.request_id,
    };

    const doc = await itemModel.create(itemObj);
    ctx.body = doc; // this will update the ctx.response.body in server response
    ctx.status = 201;
    console.log("ctx", ctx);
  } catch (error) {
    console.log("error", error);
    ctx.status = 500;
  }
};

const getUserItems = async (ctx, next) => {
  try {
    const userId = ctx.params.id;
    const body = await itemModel.find({ created_by: ObjectId(userId) });

    ctx.body = body; // this will update the ctx.response.body in server response
    ctx.status = 201;
    console.log("ctx", ctx);
  } catch (error) {
    console.log("error", error);
    ctx.status = 500;
  }
};

const getItem = async (ctx, next) => {
  try {
    const itemId = ctx.params.id;
    const body = await itemModel.findById(itemId);

    ctx.body = body; // this will update the ctx.response.body in server response
    ctx.status = 201;
    console.log("ctx", ctx);
  } catch (error) {
    console.log("error", error);
    ctx.status = 500;
  }
};

const updateItem = async (ctx, next) => {
  try {
    const itemId = ctx.params.id;
    const body = await itemModel.findOneAndUpdate(
      { _id: ObjectId(itemId) },
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
  postUserItem,
  getUserItems,
  getItem,
  updateItem,
};
