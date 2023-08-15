module.exports = (app) => {
 const video = require('../controllers/video');
 const router = require('express').Router();

 router.get('/', video.findAll);
 router.get('/:videoId', video.findOne);

 app.use('/api/video', router);
};
