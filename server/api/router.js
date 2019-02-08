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

router.delete('/playlist/:id/:track_index', (req, res) => {
  mdb
    .query("UPDATE current_playlist SET songs = JSON_REMOVE(songs, '$[?]') WHERE _id = ?", [req.params.track_index, req.params.id])
    .then((results) => {
      if (!results) {
        throw 'failed to remove song';
      }
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
      res.json({ success: false });
    });
});

router.post('/playlist', (req, res) => {
  console.log(req.body);
  mdb
    .query("UPDATE current_playlist SET songs = JSON_MERGE(songs, '[?]') WHERE _id = 4", [req.body])
    .then((results) => {
      if (!results) {
        throw 'failed to add song';
      }
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
      res.json({ success: false })
    });
});

router.get('/test', (req, res) => {
  mdb
    .query('SELECT songs FROM current_playlist WHERE _id = 4')
    .then((results) => {
      if (!results) {
        throw 'query test fail'
      }
      let jpar = JSON.parse(results[0].songs);
      console.log(jpar[66]);
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
      res.json({ success: false });
    });
});

module.exports = router

