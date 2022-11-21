const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const educationSchema = new Schema(
  {
    company_name: { type: String, required: true },
    position: { type: String, required: true },
    year_started: { type: Integer, required: true },
    month_started: { type: Integer, required: true },
    year_ended: { type: Integer },
    month_ended: { type: Integer },
    description: { type: String, required: false, maxlength: 300 },
  },
  { timestamps: true }
);

const Education = mongoose.model("Message", educationSchema);

module.exports = Education;
