// ObjectId() method for converting UserId string into an ObjectId for querying database
const { ObjectId } = require("mongoose").Types;
const { Game } = require("../models");

module.exports = {
  // Get all games
  getGames(req, res) {
    Game.find()
      .then(async (games) => {
        return res.json(games);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single game
  getSingleGame(req, res) {
    Game.findOne({ _id: req.params.gameId })
      .select("-__v")
      .lean()
      .then(async (GameData) => res.json(GameData))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new Game
  createGame(req, res) {
    Game.create(req.body)
      .then((Game) => res.json(Game))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a Game and remove them from the course
  deleteGame(req, res) {
    Game.findOneAndRemove({ _id: req.params.gameId })
      .then((GameData) => res.json(GameData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add an Ump to a Game
  addUmp(req, res) {
    console.log("You are adding an Ump");

    Game.findOneAndUpdate(
      { _id: req.params.gameId },
      { $addToSet: { umps: req.params.umpId } },
      { runValidators: true, new: true }
    )
      .then((UmpData) => {
        !UmpData
          ? res.status(404).json({ message: "No Game found with that ID :(" })
          : res.json(UmpData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Remove Ump from a Game
  removeUmp(req, res) {
    Game.findOneAndUpdate(
      { _id: req.params.gameId },
      { $pull: { umps: req.params.umpId } },
      { runValidators: true, new: true }
    )
      .then((UmpData) =>
        !UmpData
          ? res.status(404).json({ message: "No Ump found with that ID :(" })
          : res.json(UmpData)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Add an Pitch to a Game
  addPitch(req, res) {
    console.log("You are adding a Pitch");

    Game.findOneAndUpdate(
      { _id: req.params.gameId },
      { $addToSet: { pitches: req.params.pitchId } },
      { runValidators: true, new: true }
    )
      .then((PitchData) => {
        !PitchData
          ? res.status(404).json({ message: "No Pitch found with that ID :(" })
          : res.json(PitchData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Remove Pitch from a Game
  removePitch(req, res) {
    Game.findOneAndUpdate(
      { _id: req.params.gameId },
      { $pull: { pitches: req.params.pitchId } },
      { runValidators: true, new: true }
    )
      .then((PitchData) =>
        !PitchData
          ? res.status(404).json({ message: "No Pitch found with that ID :(" })
          : res.json(PitchData)
      )
      .catch((err) => res.status(500).json(err));
  },

  updateGame(req, res) {
    console.log("You are updating a Game");

    Game.findOneAndUpdate({ _id: req.params.gameId }, req.body)
      .then((GameData) => {
        !GameData
          ? res.status(404).json({ message: "No Game found with that ID :(" })
          : res.json(GameData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
