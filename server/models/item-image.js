const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/samaritan");

const { Schema } = mongoose;

const imageSchema = new Schema({
  file_name: String,
  description: String,
  item_id: Schema.Types.ObjectId,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const item = mongoose.model("Items", itemSchema);

module.exports = Item;
