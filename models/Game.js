const reactionSchema = require("./Reactions");
const { Schema, model } = require("mongoose");
var moment = require("moment"); // require
const thoughtSchema = new Schema(
  {
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) =>
          moment(timestamp).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    homeTeam: {
      type: String,
      required: true,
    },
    },
    awayTeam: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thoughts = model("Thoughts", thoughtSchema);

module.exports = Thoughts;
