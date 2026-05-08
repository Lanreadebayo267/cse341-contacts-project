const express = require('express');
const mongodb = require('./data/database');

const app = express();
const PORT = 3000;

// Routes
app.use('/contacts', require('./routes/contacts'));

app.get('/', (req, res) => {
  res.send('Contacts API');
});

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(`Connected to DB and listening on port ${PORT}`);
    });
  }
});