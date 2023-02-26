const express = require('express');
const router = express.Router();
const matchMaker = require('../helpers/matchMaker');
const mongoose = require('mongoose');
const User = require('../models/user');

router.post('/compare', async (req, res) => {
  try {
    const originalUsername = req.body.my_username;
    const requestedUsername = req.body.other_username;

    const requestedUser = await User.findOne({
      'user_info.username': requestedUsername,
    });

    const originalUser = await User.findOne({
      'user_info.username': originalUsername,
    });

    if (requestedUser) {
      //At this point we have both users. We compare them
      const matchedObject = matchMaker(originalUser, requestedUser);
      res.send(matchedObject);
    } else {
      res.send({ userExists: false });
    }
  } catch (error) {
    console.log(error, 'from compare endpoint');
    res.send({});
  }
});

module.exports = router;
//async function getUser(req, res) {}
