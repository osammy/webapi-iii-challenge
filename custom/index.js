const middlewares = require("./middlewares");
const cors = require('cors');
const helmet = require('helmet');
const express = require('express')


module.exports = function(app) {
    app.use(helmet());
    app.use(cors());
    app.use(middlewares.logger);
    app.use(express.json());
    // app.use(middlewares.validateUserId);
}
