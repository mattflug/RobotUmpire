const router = require("express").Router();
const {
  getGames,
  getSingleGame,
  createGame,
  deleteGame,
  addUmp,
  updateGame,
  removeUmp,
  addPitch,
  removePitch,
} = require("../../controllers/gameController");

// /api/games
router.route("/").get(getGames).post(createGame);

// /api/games/:gameId
router.route("/:gameId").get(getSingleGame).delete(deleteGame).put(updateGame);

// /api/games/:gameId/umps/:umpId
router.route("/:gameId/umps/:umpId").post(addUmp).delete(removeUmp);

// /api/games/:gameId/pitches/:umpId
router.route("/:gameId/pitches/:pitchId").post(addPitch).delete(removePitch);

module.exports = router;
