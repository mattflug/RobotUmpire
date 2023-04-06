const umpSchema = require("./Ump");
const pitchSchema = require("./Pitch");
const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  homeTeam: {
    type: String,
    required: true,
    },
  awayTeam: {
    type: String,
    required: true,
  },
  umps: [umpSchema],
  pitch: [pitchSchema],
});


const Game = model("Game", gameSchema);

module.exports = Game;
