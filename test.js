const axios = require('axios')

axios.delete('http://localhost:3002/api/playlist/4/1')
  .then((results) => {
    // if (!results) {
    //   throw 'failed';
    // }
    console.log(results);
    return;
  })
  .catch((err) => {
    console.log('f');
  });

  // axios.get('http://localhost:3002/api/playlist/1')
  // .then((results) => {
  //   // if (!results) {
  //   //   throw 'failed';
  //   // }
  //   console.log(results);
  //   return;
  // })
  // .catch((err) => {
  //   console.log('f');
  // });