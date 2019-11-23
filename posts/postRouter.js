const express = require('express');
const helpers = require("./post.helpers")
const router = express.Router();
const verify = require("../custom/middlewares");


router.route("/")
.get(helpers.getPosts);

router.route("/:id")
.get(verify.validatePost,helpers.getPost)
.put(verify.validatePost,helpers.updatePost)
.delete(verify.validatePostId,helpers.deletePost);


// custom middleware



module.exports = router;