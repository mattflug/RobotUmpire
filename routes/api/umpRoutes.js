const router = require("express").Router();
const {
  getUmps,
  getSingleUmp,
  createUmp,
  deleteUmp,
  updateUmp,
} = require("../../controllers/umpController");

// /api/users
router.route("/").get(getUmps).post(createUmp);

// /api/users/:userId
router.route("/:umpId").get(getSingleUmp).delete(deleteUmp).put(updateUmp);

module.exports = router;
