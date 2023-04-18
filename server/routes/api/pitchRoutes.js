const router = require("express").Router();
const {
  getPitches,
  getSinglePitch,
  createPitch,
  deletePitch,
  updatePitch,
} = require("../../controllers/pitchController");

// /api/pitches
router.route("/").get(getPitches).post(createPitch);

// /api/pitches/:pitchId
router.route("/:pitchId").get(getSinglePitch).delete(deletePitch).put(updatePitch);


module.exports = router;
