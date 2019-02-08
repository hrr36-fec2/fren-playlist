const express = require('express')();
const static_route = require('express').static('../public');
const router = require('./api/router.js');
const body_parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3002;

express
  .use(body_parser.urlencoded({ extended: false }))
  .use(body_parser.json())
  .use(static_route)
  .use('/api', router)
  .use('*', (__, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public'));
  });
  
express.listen(port, () => { console.log(`express is listening at port ${port}`) });