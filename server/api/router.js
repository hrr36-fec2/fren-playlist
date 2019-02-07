const mdb = require('../db/mdb.js');
const router = require('express').Router();

router.get('/playlist/:id', (req, res) => {
  mdb
    .query('SELECT songs FROM current_playlist WHERE _id = ?', [req.params.id])
    .then((results) => {
      if (!results) {
        throw 'query test fail'
      }
      res.status(200).json(results[0].songs);
    })
    .catch((err) => {
      console.log(err);
      res.json({ success: false });
    });
});

module.exports = router