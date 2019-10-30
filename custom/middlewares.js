const Users = require('../users/userDb');
const Posts = require("../posts/postDb");

function logger(req, res, next) {
  console.log(`Method: ${req.method}`);
  console.log(`Request url: ${req.url}`);
  console.log(`Request timestamp: ${Date.now()}`);
  next();
}

//user valiations
function validateUserId(req, res, next) {
  if (req.params.id) next();
  else next({ status: 400, message: "invalid user id" });
}

function validateUser(req,res,next) {
    if(!req.body.name) {
        return next({status:400, message: "missing required name field" })
    }
    Users.getById(req.params.id)
    .then(user => {
        req.user = user;
    })
    .catch(() => {
        next({status:400, message: "missing user data" })
    })
}
//posts validations
function validatePost(req,res,next) {
    if(!Object.keys(req.body).length || req.body.constructor !== Object) {
        return next({status:400, message: "missing post data" })
    }
    if(!req.body.text) {
        return next({status:400, message: "missing required text field" });
    }
    Posts.getById(req.params.id)
    .then(post => {
        req.post = post;
        next();
    })
    .catch(() =>{
        next({status:500,message:"Couldnt validate post"})
    })
}

function validatePostId(req,res,next) {
    if(!req.params.id) {
        return next({status:400,message:"No post id found"})
    }

    next();

   
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
  validatePostId
};
