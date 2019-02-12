const maria = require('mariadb');

const mdb = maria.createPool({
  host: process.env.AWS_MARIA_URI || 'localhost',
  user: 'root',
  password: process.env.AWS_MARIA_PWD || process.env.MDBP,
  database: 'hrr',
  connectionLimit: 3
});

module.exports = mdb;