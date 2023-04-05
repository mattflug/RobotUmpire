const { Schema, model } = require("mongoose");
const { Pitch } = require(".");

// Schema to create Pitch model
const pitchSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
});

const Ump = model("pitch", pitchSchema);

module.exports = Pitch;
