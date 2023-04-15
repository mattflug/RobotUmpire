const umpSchema = require("./Ump");
const pitchSchema = require("./Pitch");
const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  date: {
    type: Number,
    required: true,
  },
  homeTeam: {
    type: Number,
    required: true,
  },
  awayTeam: {
    type: Number,
    required: true,
  },
  umps: [
    {
      type: Schema.Types.ObjectId,
      ref: "Umps",
    },
  ],
  pitch: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pitches",
    },
  ],
});


const Game = model("Game", gameSchema);

module.exports = Game;
