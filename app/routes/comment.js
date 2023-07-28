module.exports = (app) => {
 const comment = require('../controllers/comment');
 const router = require('express').Router();

 router.get('/', comment.findAll);
 router.get('/:id', comment.findOne);
 router.post('/', comment.create);
 router.put('/:id', comment.update);
 router.delete('/:id', comment.delete);

 app.use('/api/comment', router);
};
