const express = require("express");
const router = express.Router();
const addUser = require("../helpers/addUser");
const mongoose = require("mongoose");
const User = require("../models/user");

router.post("/compare", async (req, res) => {
  try {
    console.log(req.body.username);
    const user = await User.findOne({
      user_info: { username: req.body.username },
    });
    if (user) {
      res.send(user);
    } else {
      res.send({ userExists: false });
    }
  } catch (error) {
    console.log(error, "from compare endpoint");
    res.send({});
  }
});

module.exports = router;
//async function getUser(req, res) {}
