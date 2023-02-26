const express = require('express');
const router = express.Router();
const addUser = require('../helpers/addUser');

router.post('/compare', (req, res) => {
  res.send('ayo');
});

router.get('/test', (req, res) => {
  console.log('hit');
});

module.exports = router;
//async function getUser(req, res) {}
