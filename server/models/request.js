const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/samaritan");

const { Schema } = mongoose;

const requestSchema = new Schema(
  {
    title: String,
    description: String,
    perk: String,
    status: {
      type: String,
      enum: ["OPEN", "PROCESSING", "CLOSED"],
      default: "OPEN",
    },
    created_by: Schema.Types.ObjectId,
    start_date: Date,
    end_date: Date,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Request = mongoose.model("Requests", requestSchema);

module.exports = Request;
