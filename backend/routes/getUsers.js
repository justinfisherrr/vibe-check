const express = require("express");
const router = express.Router();
const User = require("../models/user");

//This route assumes we will always be passed a query
router.get("/getuser/:id", async (req, res) => {
  let users = {};
  const parse = {
    user_info: 1,
    _id: 0,
  };
  const conditionals = {
    $or: [
      {
        "user_info.user_id": { $regex: `^${req.params.id}`, $options: "i" },
      },
      {
        "user_info.username": {
          $regex: `^${req.params.id}`,
          $options: "i",
        },
      },
    ],
  };
  try {
    users = await User.find(conditionals, parse);
    res.send(users);
  } catch (error) {
    res.status(500).send(users);
  }
});

module.exports = router;
