const fs = require("fs");

fs.readFile("./dayThree.txt", "utf8", function(err, data) {
  if (err) throw err;

  const dataString = data.replace(/\n/g, ",");
  const dataArray = dataString.split(",");

  const matchingItem = [];
  const comparisionArr = [];

  dataArray.forEach(rucksack => {
    for (let i = 0; i < rucksack.length; i++) {
      if (i < rucksack.length / 2) {
        comparisionArr.push(rucksack[i]);
      } else if (i >= rucksack.length / 2) {
        if (comparisionArr.includes(rucksack[i])) {
          matchingItem.push(rucksack[i]);
          break;
        }
      }
    }
  });

  let total = 0;

  matchingItem.forEach(letter => {
    if (letter.toUpperCase() === letter) {
      total += letter.charCodeAt(0) - 38;
    } else if (letter.toLowerCase() === letter) {
      total += letter.charCodeAt(0) - 96;
    }
  });

  console.log(total, "answer part 1");

  //part 2
  elvesObj = {};
  let totalTwo = 0;

  dataArray.forEach((rucksack, index) => {
    if (elvesObj[Math.floor(index / 3)]) {
      return elvesObj[Math.floor(index / 3)].push(rucksack);
    } else return (elvesObj[Math.floor(index / 3)] = [rucksack]);
  });

  for (key in elvesObj) {
    for (let i = 0; i < elvesObj[key][0].length; i++) {
      if (elvesObj[key][1].includes(elvesObj[key][0][i])) {
        if (!elvesObj[key][3]) {
          elvesObj[key].push(elvesObj[key][0][i]);
        } else elvesObj[key][3] += elvesObj[key][0][i];
      }
    }

    for (let i = 0; i < elvesObj[key][2].length; i++) {
      if (elvesObj[key][3].includes(elvesObj[key][2][i])) {
        if (!elvesObj[key][4]) {
          elvesObj[key].push(elvesObj[key][2][i]);
        } else elvesObj[key][4] += elvesObj[key][2][i];
      }
    }

    const letter = elvesObj[key][4];
    if (letter.toUpperCase() === letter) {
      totalTwo += letter.charCodeAt(0) - 38;
    } else if (letter.toLowerCase() === letter) {
      totalTwo += letter.charCodeAt(0) - 96;
    }
  }
  console.log(totalTwo, "answer part 2");
});
