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
      ref: "Ump",
    },
  ],
  pitch: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pitch",
    },
  ],
});

const Game = model("Game", gameSchema);

module.exports = Game;
