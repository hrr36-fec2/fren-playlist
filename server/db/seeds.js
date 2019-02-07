const maria = require('mariadb');
const path = require('path');
const fs = require('fs');

let mdb = maria.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mar1a',
  database: 'hrr',
  connectionLimit: 9
});

fs.readFile(path.resolve(__dirname, 'featured.json'), (err, data) => {
  if (err) {
    console.log(err);
  }
  let results = JSON.parse(data);
  let mockData = [];

  for (let i = 0; i < 8; i++) {
    let mockObj = {
      track_id: results.aTracks[i].track_id,
      track_title: results.aTracks[i].track_title,
      track_duration: results.aTracks[i].track_duration,
      artist_name: results.aTracks[i].artist_name,
      album_title: results.aTracks[i].album_title,
      album_image_file: results.aTracks[i].album_image_file,
      track_url: results.aTracks[i].track_url
    };
    mockData.push(mockObj);
  }
  mdb.query('INSERT INTO current_playlist (name, image_url, songs) VALUES ("hrr36-fec2-sml", "someimg.jpg", ?)', [JSON.stringify(mockData)]);
  mockData = [];

  for (let i = 9; i < 16; i++) {
    let mockObj = {
      track_id: results.aTracks[i].track_id,
      track_title: results.aTracks[i].track_title,
      track_duration: results.aTracks[i].track_duration,
      artist_name: results.aTracks[i].artist_name,
      album_title: results.aTracks[i].album_title,
      album_image_file: results.aTracks[i].album_image_file,
      track_url: results.aTracks[i].track_url
    };
    mockData.push(mockObj);
  }
  mdb.query('INSERT INTO current_playlist (name, image_url, songs) VALUES ("hrr36-fec2-med", "someimg.jpg", ?)', [JSON.stringify(mockData)]);
  mockData = [];

  for (let i = 17; i < 32; i++) {
    let mockObj = {
      track_id: results.aTracks[i].track_id,
      track_title: results.aTracks[i].track_title,
      track_duration: results.aTracks[i].track_duration,
      artist_name: results.aTracks[i].artist_name,
      album_title: results.aTracks[i].album_title,
      album_image_file: results.aTracks[i].album_image_file,
      track_url: results.aTracks[i].track_url
    };
    mockData.push(mockObj);
  }
  mdb.query('INSERT INTO current_playlist (name, image_url, songs) VALUES ("hrr36-fec2-lrg", "someimg.jpg", ?)', [JSON.stringify(mockData)]);
  mockData = [];

  for (let i = 32; i < 99; i++) {
    let mockObj = {
      track_id: results.aTracks[i].track_id,
      track_title: results.aTracks[i].track_title,
      track_duration: results.aTracks[i].track_duration,
      artist_name: results.aTracks[i].artist_name,
      album_title: results.aTracks[i].album_title,
      album_image_file: results.aTracks[i].album_image_file,
      track_url: results.aTracks[i].track_url
    };
    mockData.push(mockObj);
  }
  mdb
    .query('INSERT INTO current_playlist (name, image_url, songs) VALUES ("hrr36-fec2-sml", "someimg.jpg", ?)', [JSON.stringify(mockData)])
    .then((qResults) => {
      if (!qResults) {
        throw 'failed to seed';
      }
      return;
    })
    .then((err) => {
      console.log(err);
    });
  mockData = [];

  // mdb.end();

  console.log('done seeding');
  return;
  
});
