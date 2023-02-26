//A helper function that adds a user to our database
const mongoose = require("mongoose");
const User = require("../models/user");
const spotifyParse = require("./spotifyParse");

async function addUser() {
  try {
    //Parse the data first
    const parsedData = await spotifyParse();
    const foundProfile = await User.findOne({
      "user_info.username": parsedData.user_info.username,
    });
    console.log(foundProfile);
    if (foundProfile) {
      await User.findOneAndUpdate(parsedData);
    } else {
      const user = new User(parsedData);
      await user.save();
    }
    return parsedData.user_info.username;
  } catch (error) {
    console.log(error, "Found in addUser");
  }
}

module.exports = addUser;
