const app = require('express').Router();
const db = require('../db');

const Product = db.models.Product; // seems to be interchangable with the 2 lines below

// const { models } = db;
// const { Product } = models;


module.exports = app;

app.get('/', (req, res, next) => {
  Product.findAll()
    .then( (products) => {
      res.send(products);
    }).catch( (err) => {
      next(err);
    });
});

app.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then( (product) => {
      res.send(product);
    }).catch( (err) => {
      next(err);
    });
});
