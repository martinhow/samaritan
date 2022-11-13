const { ObjectId } = require("mongodb");
const itemModel = require("../models/item");
const itemImageModel = require("../models/item-image");

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
  } catch (error) {
    console.log("error", error);
    ctx.status = 500;
  }
};

const postItemImage = async (ctx, next) => {
  try {
    const file = ctx.request.file;
    const body = ctx.request.body;
    console.log("ctx", ctx);
    const itemId = ctx.params.id;

    console.log("postItemImage file", file);
    console.log("postItemImage body", body);
    console.log("postItemImage itemId", itemId);

    const itemImageObj = {
      file_name: file.originalname,
      item_id: itemId,
      image: {
        data: file.buffer,
        mime_type: file.mimetype,
      },
    };

    const itemImageDoc = await itemImageModel.create(itemImageObj);
    const doc = await itemModel.findById(itemId);
    ctx.body = doc; // this will update the ctx.response.body in server response
    ctx.status = 201;
  } catch (error) {
    console.log("error", error);
    ctx.status = 500;
  }
};

const getItemImage = async (ctx, next) => {
  try {
    const itemId = ctx.params.id;
    const doc = await itemImageModel.findOne({ item_id: ObjectId(itemId) });
    ctx.type = doc.image.mime_type;
    ctx.body = doc.image.data;
    ctx.status = 200;
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
    ctx.status = 200;
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
    ctx.status = 200;
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
    ctx.status = 200;
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
  postItemImage,
  getItemImage,
};
