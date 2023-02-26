function getTopSong(user1, user2) {
  let user1Arr = user1.user_data.top_songs;
  let user2Arr = user2.user_data.top_songs;

  let fullWeightedArr = compareSongs(user1Arr, user2Arr);
  let top5Arr = [];
  for (let i = 0; i < 5; i++) {
    let songName = fullWeightedArr[i].song_name;
    for (let k = 0; k < user1Arr.length; ++k) {
      if (user1Arr[k].song_name === songName) {
        top5Arr.push({
          song_name: user1Arr[k].song_name,
          song_img: user1Arr[k].song_img,
        });
      }
    }
  }
  return top5Arr;
}

function compareSongs(user1Arr, user2Arr) {
  let user1NamesArr = user1Arr.map((songObject) => songObject.song_name);
  let user2NamesArr = user2Arr.map((songObject) => songObject.song_name);

  const user1LayerArr = mapToStrata(user1Arr);
  const user2LayerArr = mapToStrata(user2Arr);

  let weightedArr = [];

  for (let i = 0; i < user1NamesArr.length; ++i) {
    let indexOfItem = user2NamesArr.indexOf(user1NamesArr[i]);
    if (indexOfItem !== -1) {
      let indexOfItemInMyArr = i;
      let indexOfItemInOtherUserArr = indexOfItem;

      let layerOfItemInMyArr = getLayer(indexOfItemInMyArr, user1LayerArr);
      let layerOfItemInOtherUserArr = getLayer(
        indexOfItemInOtherUserArr,
        user2LayerArr
      );

      let myPoints = 10 - layerOfItemInMyArr;
      let hisPoints = 10 - layerOfItemInOtherUserArr;

      weightedArr.push({
        song_name: user1NamesArr[i],
        weight: myPoints + hisPoints,
      });
    }
  }

  return insertionSort(weightedArr);
}
function insertionSort(weightedArr) {
  for (let i = 1; i < weightedArr.length; ++i) {
    let j = i - 1;
    while (j >= 0 && weightedArr[j].weight < weightedArr[j + 1].weight) {
      let temp = weightedArr[j + 1];
      weightedArr[j + 1] = weightedArr[j];
      weightedArr[j] = temp;
      j--;
    }
  }
  return weightedArr;
}

function mapToStrata(userArr) {
  const NUM_LAYERS = 10;
  const length = userArr.length;
  const strata = Math.ceil(length / NUM_LAYERS);

  let layerArr = [];
  for (let i = 1; i <= 10; ++i) {
    layerArr[i - 1] = i * strata;
  }
  return layerArr;
}

function getLayer(index, layerArr) {
  for (let i = 0; i < layerArr.length; ++i) {
    if (index < layerArr[i]) {
      return i;
    }
  }
}

module.exports = getTopSong;
