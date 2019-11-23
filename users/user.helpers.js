const Users = require("./userDb");
const Posts = require("../posts/postDb");


function createUser(req,res,next) {
    Users.insert(req.body)
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        return next({status:404,message:"Couldn't create user!"})
    })
}

function getUserPosts(req,res,next) {
    Users.getUserPosts(req.params.id)
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => {
        return next({status:400,message:err.message})
    })
}

function getUsers(req, res, next) {
  Users.get().then(users => {
    res.status(200).json(users);
  });
}

function getUser(req, res, next) {
  res.json(req.user);
}

function updateUser(req, res, next) {
  res.json({
    ...res.user,
    ...req.body
  });
}

function deleteUser(req,res,next) {
    Users.remove(req.params.id)
    .then(() => {
        res.json({
            message:"User removed"
        })
    })
}

function createUserPost(req,res,next) {
  Posts.insert(req.body)
  .then(post => {
    res.json(post);
  })
  .catch(err => {
    return next({status:500,message:err.message});
  })
}


module.exports  = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    getUserPosts,
    createUserPost,
}