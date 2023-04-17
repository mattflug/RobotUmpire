const { Schema, model } = require("mongoose");

// Schema to create Pitch model
const pitchSchema = new Schema({
  pitch_count: {
    type: Number,
    required: true,
  },
  batter: {
    type: Number,
    required: true,
  },
  pitcher: {
    type: Number,
    required: true,
  },
  pitch_location: {
    type: Number,
    required: true,
  },
  pitch_speed: {
    type: Number,
    required: true,
  },
  pitch_type: {
    type: Number,
    required: true,
  },
});

const Pitch = model("Pitch", pitchSchema);

module.exports = Pitch;
