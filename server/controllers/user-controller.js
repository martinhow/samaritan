const userModel = require("../models/user");

const getUsers = async (ctx, next) => {
  try {
    const body = await userModel.find();
    ctx.status = 200;
    ctx.body = body;
  } catch (error) {
    console.log("error get find", error);
    ctx.response.status = 500;
  }
};

const getUser = async (ctx, next) => {
  try {
    const userId = ctx.params.id;
    const body = await userModel.findById(userId);
    console.log("getUser", body);
    ctx.status = 200;
    ctx.body = body;
  } catch (error) {
    console.log("error get find", error);
    ctx.response.status = 500;
  }
};

const getUserByEmail = async (ctx, next) => {
  try {
    const email = ctx.request.body.email;
    const body = await userModel.findOne({ email_address: email });
    console.log("getUserByEmail", body);
    if (!body) {
      ctx.response.status = 500;
      ctx.body = {
        message: "user not found",
      };
    } else {
      ctx.response.status = 200;
      ctx.body = body;
    }
  } catch (error) {
    console.log("error get find", error);
    ctx.response.status = 500;
  }
};

const postUser = async (ctx, next) => {
  try {
    const body = await ctx.request.body;
    const doc = await userModel.create(body);
    ctx.body = doc; // this will update the ctx.response.body in server response
    ctx.status = 201;
  } catch (error) {
    console.log("error", error);
    ctx.status = 500;
  }
};

module.exports = { getUser, getUsers, postUser, getUserByEmail };
