const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
  {
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
        type: [Number],
        ref: "Umps",
      },
    ],
    pitch: [
      {
        type: [Number],
        ref: "Pitches",
      },
    ],
  }
);


const Game = model("Game", gameSchema);

module.exports = Game;
