const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    message_origin: { type: Schema.Types.ObjectId, ref: "User" },
    message_reciever: { type: Schema.Types.ObjectId, ref: "User" },
    message_content_text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
