
const express = require('express');
const app = express();
const MemeSchema = require('../models/meme.js');
const Comment = require('../models/comment.js');

// ***************  ROUTES  **************** //

// CREATE Comment
app.post('/meme/:id/comments', (req, res) => {
  Comment.create(req.body)
    .then(comment => {
      res.status(200).send({ comment: comment });
    })
    .catch((err) => {
      res.status(400).send({ err: err });
    })
});

// DELETE Comment
app.delete('/meme/:id/comments/:commentId', (req, res) => {

  console.log("Delete comment");
  Comment.findByIdAndRemove(req.params._id)
    .then((comment) => {
      res.status(200).send(comment);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(400).send(err)
    })
});

module.exports = app;