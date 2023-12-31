const dbConfig = require('../config/database');
const mongoose = require('mongoose');

module.exports = {
 mongoose,
 url: dbConfig.url,
 comment: require('./comment.js')(mongoose),
 user: require('./auth.js')(mongoose),
};
