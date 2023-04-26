const fs = require("fs");

fs.readFile("./daySix.txt", "utf8", function(err, data) {
  if (err) throw err;

  const dataArray = data.split("");
  let findDuplicates = arr =>
    arr.filter((item, index) => arr.indexOf(item) != index);

  const comparisonArray = [];
  const answerArray = [];
  const comparisonArray2 = [];
  const answerArray2 = [];

  dataArray.forEach((letter, index) => {
    if (index <= 3) {
      comparisonArray.push(letter);
    }

    if (index > 3) {
      if (findDuplicates(comparisonArray).length === 0) {
        answerArray.push(index);
      }
      comparisonArray.push(letter) && comparisonArray.shift();
    }
  });
  console.log(answerArray[0], "answer part 1");

  //part 2
  dataArray.forEach((letter, index) => {
    if (index <= 13) {
      comparisonArray2.push(letter);
    }

    if (index > 13) {
      if (findDuplicates(comparisonArray2).length === 0) {
        answerArray2.push(index);
      }
      comparisonArray2.push(letter) && comparisonArray2.shift();
    }
  });

  console.log(answerArray2[0], "answer part 2");
});
