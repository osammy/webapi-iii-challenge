const express = require('express');
const userRouter = require("../users/userRouter");
const postRouter = require("../posts/postRouter");

const mainRouter = express.Router();

mainRouter.use('/users', userRouter);
mainRouter.use('/posts', postRouter);

module.exports = mainRouter;