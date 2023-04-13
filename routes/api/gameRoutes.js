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
router.route("/").get(getGame).post(createGame);

// /api/games/:gameId
router.route("/:gameId").get(getSingleGame).delete(deleteGame).put(updateGame);

// /api/gamess/:gameId/umps/:umpId
router.route("/:gameId/umps/:umpId").post(addUmp).delete(removeUmp);

// /api/gamess/:gameId/umps/:umpId
router.route("/:gameId/pitches/:pitchId").post(addUmp).delete(removeUmp);

module.exports = router;
