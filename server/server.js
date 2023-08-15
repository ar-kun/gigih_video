const express = require('express');
const cors = require('cors');
const db = require('./app/model');

const app = express();

const corsOptions = {
 origin: '*',
};

// Register cors
app.use(cors(corsOptions));

app.use(express.json());

// Connect to database
db.mongoose
 .connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then(() => {
  console.log('Connected to the database!');
 })
 .catch((err) => {
  console.log(`Cannot connect to the database! ${err.message}}`);
  process.exit();
 });

// Route
require('./app/routes/video')(app);
require('./app/routes/comment')(app);
require('./app/routes/auth')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
 console.log(`Server start in port ${PORT}`);
});
