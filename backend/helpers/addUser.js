//A helper function that adds a user to our database
const mongoose = require("mongoose");
const User = require("../models/user");
const spotifyParse = require("./spotifyParse");

async function addUser() {
  try {
    //Parse the data first
    const parsedData = await spotifyParse();
    const foundProfile = await User.findOne({
      username: parsedData.user_data.name,
    });

    if (foundProfile) {
      await User.findOneAndUpdate(parsedData);
    } else {
      const user = new User(parsedData);
      await user.save();
    }
  } catch (error) {
    console.log(error, "Found in addUser");
  }
}

module.exports = addUser;
