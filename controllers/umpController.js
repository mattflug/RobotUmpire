// ObjectId() method for converting UserId string into an ObjectId for querying database
const { ObjectId } = require("mongoose").Types;
const { Ump } = require("../models");

module.exports = {
  // Get all umps
  getUmps(req, res) {
    Ump.find()
      .then(async (umps) => {
        return res.json(umps);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single Ump
  getSingleUmp(req, res) {
    Ump.findOne({ _id: req.params.umpId })
      .select("-__v")
      .lean()
      .then(async (UmpData) => res.json(UmpData))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new Ump
  createUmp(req, res) {
    Ump.create(req.body)
      .then((ump) => res.json(ump))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a User and remove them from the course
  deleteUmp(req, res) {
    Ump.findOneAndRemove({ _id: req.params.UmpId })
      .then((UmpData) => res.json(UmpData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateUmp(req, res) {
    console.log("You are updating an Ump");

    Ump.findOneAndUpdate({ _id: req.params.UmpId }, req.body)
      .then((UmpData) => {
        !UmpData
          ? res.status(404).json({ message: "No Ump found with that ID :(" })
          : res.json(UmpData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
