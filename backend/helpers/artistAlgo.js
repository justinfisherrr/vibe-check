function getTopArtists(user1, user2) {
  let user1Arr = user1.user_data.top_artists;
  let user2Arr = user2.user_data.top_artists;

  let fullWeightedArr = compareArtists(user1Arr, user2Arr);
  if (fullWeightedArr.length === 0) {
    fullWeightedArr.push({
      artist_name: '',
      weight: -1,
    });
  }

  let t = 0;
  while (fullWeightedArr.length < 5) {
    let currentArtistName = user2Arr[t].artist_name;
    if (fullWeightedArr.some((e) => e.artist_name !== currentArtistName)) {
      fullWeightedArr.push({
        artist_name: currentArtistName,
        weight: 0,
      });
    }
    if (fullWeightedArr[0].weight === -1) {
      fullWeightedArr.shift();
    }
    t++;
  }

  let top5Arr = [];
  for (let i = 0; i < 5; i++) {
    let artistName = fullWeightedArr[i].artist_name;

    for (let k = 0; k < user2Arr.length; ++k) {
      if (user2Arr[k].artist_name === artistName) {
        top5Arr.push({
          artist_name: user2Arr[k].artist_name.concat(
            `${fullWeightedArr[i].weight === 0 ? '*' : ''}`
          ),
          artist_images: user2Arr[k].artist_img,
        });
      }
    }
  }
  return top5Arr;
}

function compareArtists(user1Arr, user2Arr) {
  let user1NamesArr = user1Arr.map((artistObj) => artistObj.artist_name);
  let user2NamesArr = user2Arr.map((artistObj) => artistObj.artist_name);

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
        artist_name: user1NamesArr[i],
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

module.exports = getTopArtists;
