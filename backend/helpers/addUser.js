//A helper function that adds a user to our database
const mongoose = require("mongoose");
const User = require("../models/user");
const spotifyParse = require("../parsers/spotifyParse");

async function addUser() {
  try {
    //Parse the data first
    const parsedData = await spotifyParse();
    const foundProfile = await User.findOne({
      "user_info.user_id": parsedData.user_info.user_id,
    });

    if (foundProfile) {
      await User.findOneAndUpdate(
        {
          "user_info.user_id": parsedData.user_info.user_id,
        },
        { $set: parsedData }
      );
    } else {
      const user = new User(parsedData);
      await user.save();
    }
    return parsedData.user_info;
  } catch (error) {
    console.log(error, "Found in addUser");
  }
}

module.exports = addUser;
