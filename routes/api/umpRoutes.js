const router = require("express").Router();
const {
  getUmps,
  getSingleUmp,
  createUmp,
  deleteUmp,
  updateUmp,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUser).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/assignments/:assignmentId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
