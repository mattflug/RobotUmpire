const { Schema, model } = require("mongoose");

// Schema to create Ump model
const umpSchema = new Schema(
  {
    number: {
      type: Number,
      unique: true,
      required: true,
      trimmed: true,
    },
  },
);

const Ump = model("ump", umpSchema);

module.exports = Ump;
