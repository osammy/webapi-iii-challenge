const middlewares = require("./middlewares");
const cors = require('cors');
const helmet = require('helmet');


module.exports = function(app) {
    app.use(helmet());
    app.use(cors());
    app.use(middlewares.logger);
    // app.use(middlewares.validateUserId);
}
