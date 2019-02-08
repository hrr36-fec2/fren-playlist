const maria = require('mariadb');

const mdb = maria.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.MDBP,
  database: 'hrr',
  connectionLimit: 3
});

module.exports = mdb;