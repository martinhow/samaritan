const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/samaritan");

const { Schema } = mongoose;

const itemSchema = new Schema(
  {
    name: String,
    description: String,
    owner_id: Schema.Types.ObjectId,
    request_id: Schema.Types.ObjectId,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Item = mongoose.model("Items", itemSchema);

module.exports = Item;
