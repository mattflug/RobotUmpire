const router = require("express").Router();
const {
  getPitches,
  getSinglePitch,
  createPitch,
  deletePitch,
  updateUser,
} = require("../../controllers/pitchController");

// /api/users
router.route("/").get(getPitches).post(createPitch);

// /api/users/:userId
router.route("/:pitchId").get(getSinglePitch).delete(deletePitch).put(updatePitch);


module.exports = router;
