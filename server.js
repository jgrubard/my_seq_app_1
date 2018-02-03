const express = require('express');
const app = express();
const db = require('./db');
const Product = db.models.Product;

app.use('/products', require('./routes/products'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`** Listening on Port ${port} **`);
});

db.sync()
  .then( () => {
    db.seed()
  });
