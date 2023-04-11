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
    type: Nunber,
    required: true,
  },
  umps: [umpSchema],
  pitch: [pitchSchema],
});


const Game = model("Game", gameSchema);

module.exports = Game;
