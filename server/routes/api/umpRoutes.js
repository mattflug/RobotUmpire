const router = require("express").Router();
const {
  getUmps,
  getSingleUmp,
  createUmp,
  deleteUmp,
  updateUmp,
} = require("../../controllers/umpController");

// /api/umps
router.route("/").get(getUmps).post(createUmp);

// /api/umps/:umpId
router.route("/:umpId").get(getSingleUmp).delete(deleteUmp).put(updateUmp);

module.exports = router;
