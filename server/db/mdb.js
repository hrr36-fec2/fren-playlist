const maria = require('mariadb');

const mdb = maria.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mar1a',
  database: 'hrr',
  connectionLimit: 3
});

module.exports = mdb;