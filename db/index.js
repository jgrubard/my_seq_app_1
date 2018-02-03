const Sequelize = require('sequelize');
const _conn = new Sequelize(process.env.DATABASE_URL);

const Product = _conn.define('product', {
  name: Sequelize.STRING,
  price: Sequelize.INTEGER
});

const sync = () => {
  return _conn.sync({ force: true });
};

const seed = () => {
  return Promise.all([
    Product.create({ name: 'foo', price: 10 }),
    Product.create({ name: 'bar', price: 5 })
  ]);
};

module.exports = {
  sync,
  seed,
  models: {
    Product
  }
};
