const express = require('express');
const helpers = require("./post.helpers")
const router = express.Router();
const verify = require("../custom")

router.route("/")
.get(helpers.getPosts);

router.route("/:id")
.get(verify.validatePostId,helpers.getPost)
.put(verify.validatePostId,helpers.updatePost)
.delete(verify.validatePostId,helpers.deletePost);


// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;