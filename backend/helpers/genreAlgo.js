function getTopGenres(user1, user2) {
  let user1Arr = createGenreArray(user1.user_data.top_artists);
  let user2Arr = createGenreArray(user2.user_data.top_artists);

  let fullWeightedArr = compareGenres(user1Arr, user2Arr);
  let top5Arr = [];
  for (let i = 0; i < 5; i++) {
    top5Arr.push(fullWeightedArr[i].genre);
  }
  return top5Arr;
}
function createGenreArray(user) {
  let genreArr = user.map(({ genres }) => {
    return genres;
  });
  let user1Arr = [];

  for (let i = 0; i < genreArr.length; ++i) {
    let current = genreArr[i];
    for (let j = 0; j < current.length; ++j) {
      user1Arr.push(current[j]);
    }
  }
  let filtered = user1Arr.filter((elem, index, self) => {
    return index === self.indexOf(elem);
  });
  return filtered;
}

function compareGenres(user1Arr, user2Arr) {
  const user1LayerArr = mapToStrata(user1Arr);
  const user2LayerArr = mapToStrata(user2Arr);

  let weightedArr = [];

  for (let i = 0; i < user1Arr.length; ++i) {
    let indexOfItem = user2Arr.indexOf(user1Arr[i]);
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
        genre: user1Arr[i],
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

module.exports = getTopGenres;
