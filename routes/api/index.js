const router = require("express").Router();
const gameRoutes = require("./gameRoutes");
const pitchRoutes = require("./pitchRoutes");
const umpRoutes = require("./umpRoutes");

router.use("/games", gameRoutes);
router.use("/pitches", pitchRoutes);
router.use("/umps", umpRoutes);

module.exports = router;
