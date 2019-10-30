const Users = require("./userDb");

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


module.exports  = {
    getUser,
    getUsers,
    updateUser,
    deleteUser,
}