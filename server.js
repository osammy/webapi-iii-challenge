const express = require("express");
const resources = require("./resources")
const middlewares =  require("./custom");

const app = express();

//custom middleware
middlewares(app);



app.use(resources)

// app.get("/", (req, res) => {
//   res.send(`<h2>Let's write some middleware!</h2>`);
// });

app.use((err,req,res,next) => {
  console.log(err)
  const {status,message} = err;
  res.status(status).json({
    message
  })
})

module.exports = app;
