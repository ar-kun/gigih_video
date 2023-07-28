exports.findAll = (req, res) => {
 //  file all
 res.send('video findAll');
};

exports.findOne = (req, res) => {
 const id = req.params.id;

 res.send('video findAll by id');
};
