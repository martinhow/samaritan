const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/samaritan");

const { Schema } = mongoose;

const imageSchema = new Schema({
  file_name: String,
  item_id: Schema.Types.ObjectId,
  image: {
    data: Buffer,
    mime_type: String,
  },
});

const ItemImage = mongoose.model("ItemImages", imageSchema);

module.exports = ItemImage;
