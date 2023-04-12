// ObjectId() method for converting UserId string into an ObjectId for querying database
const { ObjectId } = require("mongoose").Types;
const { Pitch } = require("../models");

module.exports = {
  // Get all pitches
  getPitches(req, res) {
    User.find()
      .then(async (pitch) => {
        return res.json(pitch);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single Pitch
  getSinglePitch(req, res) {
    Pitch.findOne({ _id: req.params.pitchId })
      .select("-__v")
      .lean()
      .then(async (PitchData) => res.json(PitchData))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new Pitch
  createPitch(req, res) {
    Pitch.create(req.body)
      .then((Pitch) => res.json(Pitch))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a Pitch and remove them from the course
  deletePitch(req, res) {
    Pitch.findOneAndRemove({ _id: req.params.pitchId })
      .then((PitchData) => res.json(PitchData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updatePitch(req, res) {
    console.log("You are adding a Pitch");

    Pitch.findOneAndUpdate({ _id: req.params.pitchId }, req.body)
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
};
