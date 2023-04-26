const fs = require("fs");

function sumStr(str) {
  let strArr = str.split(",");
  let sum = strArr.reduce(function(total, num) {
    return parseFloat(total) + parseFloat(num);
  });

  return sum;
}

fs.readFile("./dayOne.txt", "utf8", function(err, data) {
  if (err) throw err;

  const dataString = data.replace(/\n/g, ",");

  const dataArray = dataString.split(",,");

  const resultArray = dataArray.map(data => {
    return sumStr(data);
  });

  let largest = resultArray[0];
  let position = 0;

  for (let i = 0; i < resultArray.length; i++) {
    if (largest < resultArray[i]) {
      largest = resultArray[i];
    }
  }

  console.log(largest, "answer part one");

  resultArray.sort(function(a, b) {
    return b - a;
  });
  console.log(
    resultArray[0] + parseInt(resultArray[1]) + resultArray[2],
    "ANSWER PART TWO"
  );
});
