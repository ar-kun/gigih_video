module.exports = (app) => {
 const video = require('../controllers/video');
 const router = require('express').Router();

 router.get('/', video.findAll);
 router.get('/:id', video.findOne);

 app.use('/api/video', router);
};
