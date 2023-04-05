const { Schema, model } = require("mongoose");

// Schema to create Ump model
const umpSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
  },
);

const Ump = model("ump", umpSchema);

module.exports = Ump;
