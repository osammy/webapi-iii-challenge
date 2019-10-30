const Posts = require("./postDb");

function getPosts(req, res, next) {
  Posts.get().then(posts => {
    res.status(200).json(posts);
  });
}

function getPost(req, res, next) {
  res.json(req.post);
}

function updatePost(req, res, next) {
  res.json({
    ...res.post,
    ...req.body
  });
}

function deletePost(req,res,next) {
    Posts.remove(req.params.id)
    .then(() => {
        res.json({
            message:"Post removed"
        })
    })
}


module.exports  = {
    getPost,
    getPosts,
    updatePost,
    deletePost,
}