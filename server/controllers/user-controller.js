const userModel = require('../models/user');


const getUsers = async (ctx, next) => {
  try {
    const body = await userModel.find();
    ctx.status = 200;
    ctx.body = body;
  } catch (error) {
    console.log('error get find', error)
    ctx.response.status = 500;
  }
};

const postUser = async (ctx, next) => {
  try {
    const body = await ctx.request.body;
    const doc = await userModel.create(body);
    ctx.body = doc; // this will update the ctx.response.body in server response
    ctx.status = 201;
    console.log('ctx', ctx)
  } catch (error) {
    console.log('error', error);
    ctx.status = 500;
  }
};

module.exports = { getUsers, postUser };