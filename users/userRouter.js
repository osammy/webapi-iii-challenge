const express = require('express');
const verify = require("../custom/middlewares");
const userHelpers =  require("./user.helpers");

const validateUser = [verify.validateUserId, verify.validateUser];
const validateUserPost = [verify.validateUserId, verify.validatePost];

const router = express.Router();
//start
router.route("/")
.post(userHelpers.createUser)
.get(userHelpers.getUsers)

router.route("/:id")
.get(validateUser,userHelpers.getUser)
.delete(validateUser,userHelpers.deleteUser)
.put(validateUser,userHelpers.updateUser);

router.route("/:id/posts")
.get(validateUser,userHelpers.getUserPosts)
.post(validateUserPost,userHelpers.createUserPost)

//end


module.exports = router;
