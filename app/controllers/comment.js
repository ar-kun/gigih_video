const db = require('../model');
const Comment = db.comment;

exports.create = (req, res) => {
 const comment = new Comment({
  videoID: req.body.videoID,
  comment: req.body.comment,
  nama: req.body.nama,
 });

 comment
  .save(comment)
  .then((data) => {
   res.send({ message: 'Comment created!' });
  })
  .catch((err) => {
   res.status(500).send({
    message: err.message || 'Some error occurred while creating the Comment.',
   });
  });
};

exports.findAll = (req, res) => {
 //  file all comment
 Comment.find()
  .then((data) => {
   res.send(data);
  })
  .catch((err) => {
   res.status(500).send({
    message: err.message || 'Some error occurred while retrieving comment.',
   });
  });
};

exports.findOne = (req, res) => {
 const id = req.params.id;

 Comment.findById(id)
  .then((data) => {
   if (!data) res.status(404).send({ message: `Not found comment with id ${id}` });
   else res.send(data);
  })
  .catch((err) => {
   res.status(500).send({ message: `Error retrieving comment with id=${id}` });
  });
};

exports.update = (req, res) => {
 // update comment
 const id = req.params.id;

 Comment.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
  .then((data) => {
   if (!data) {
    res.status(404).send({
     message: `Cannot update comment. Maybe comment was not found!`,
    });
   } else res.send({ message: 'comment was updated successfully.' });
  })
  .catch((err) => {
   res.status(500).send({
    message: `Error updating comment. err: ${err.message}`,
   });
  });
};

exports.delete = (req, res) => {
 const id = req.params.id;

 Comment.findByIdAndRemove(id)
  .then((data) => {
   if (!data) {
    res.status(404).send({
     message: `Cannot delete comment. Maybe comment was not found!`,
    });
   }

   res.send({ message: 'comment was deleted successfully!' });
  })
  .catch((err) => res.send({ message: `Could not delete comment. err: ${err.message}` }));
};
