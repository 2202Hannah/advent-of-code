const fs = require("fs");

fs.readFile("./dayFour.txt", "utf8", function(err, data) {
  if (err) throw err;

  const dataArray = data.replace(/\n/g, ",,").split(",,");
  const check = (arr, target) => target.every(v => arr.includes(v));
  const checkOverlap = (arr, target) => target.some(item => arr.includes(item))

  let total = 0;
  let totalTwo = 0;

  dataArray.forEach(pair => {
    const startNumberOne = parseInt(
      pair.split(",")[0].slice(0, pair.split(",")[0].indexOf("-"))
    );
    const endNumberOne = parseInt(
      pair
        .split(",")[0]
        .slice(pair.split(",")[0].indexOf("-") + 1, pair.split(",")[0].length)
    );
    const startNumberTwo = parseInt(
      pair.split(",")[1].slice(0, pair.split(",")[1].indexOf("-"))
    );
    const endNumberTwo = parseInt(
      pair
        .split(",")[1]
        .slice(pair.split(",")[1].indexOf("-") + 1, pair.split(",")[1].length)
    );

    numbersObj = {};

    for (let i = startNumberOne; i < endNumberOne + 1; i++) {
      if (numbersObj.elfOne) {
        numbersObj.elfOne.push(i);
      } else numbersObj.elfOne = [i];
    }

    for (let i = startNumberTwo; i < endNumberTwo + 1; i++) {
      if (numbersObj.elfTwo) {
        numbersObj.elfTwo.push(i);
      } else numbersObj.elfTwo = [i];
    }

    if (
      check(numbersObj.elfOne, numbersObj.elfTwo) === true ||
      check(numbersObj.elfTwo, numbersObj.elfOne) === true
    ) {
      total += 1;
    }

    if (
        checkOverlap(numbersObj.elfOne, numbersObj.elfTwo) === true ||
        checkOverlap(numbersObj.elfTwo, numbersObj.elfOne) === true
      ) {
        totalTwo += 1;
      }


  });

  console.log(total, "answer part one");
  console.log(totalTwo, "answer part two")

});
