const fs = require("fs");

fs.readFile("./dayFive.txt", "utf8", function(err, data) {
  if (err) throw err;

  const dataArray = data.replace(/\n/g, ",").split(",");

  const input = {
    1: { 1: "J", 2: "H", 3: "P", 4: "M", 5: "S", 6: "F", 7: "N", 8: "V" },
    2: { 1: "S", 2: "R", 3: "L", 4: "M", 5: "J", 6: "D", 7: "Q" },
    3: { 1: "N", 2: "Q", 3: "D", 4: "H", 5: "C", 6: "S", 7: "W", 8: "B" },
    4: { 1: "R", 2: "S", 3: "C", 4: "L" },
    5: { 1: "M", 2: "V", 3: "T", 4: "P", 5: "F", 6: "B" },
    6: { 1: "T", 2: "R", 3: "Q", 4: "N", 5: "C" },
    7: { 1: "G", 2: "V", 3: "R" },
    8: { 1: "C", 2: "Z", 3: "S", 4: "P", 5: "D", 6: "L", 7: "R" },
    9: { 1: "D", 2: "S", 3: "J", 4: "V", 5: "G", 6: "P", 7: "B", 8: "F" }
  };

  const input2 = {
    1: { 1: "J", 2: "H", 3: "P", 4: "M", 5: "S", 6: "F", 7: "N", 8: "V" },
    2: { 1: "S", 2: "R", 3: "L", 4: "M", 5: "J", 6: "D", 7: "Q" },
    3: { 1: "N", 2: "Q", 3: "D", 4: "H", 5: "C", 6: "S", 7: "W", 8: "B" },
    4: { 1: "R", 2: "S", 3: "C", 4: "L" },
    5: { 1: "M", 2: "V", 3: "T", 4: "P", 5: "F", 6: "B" },
    6: { 1: "T", 2: "R", 3: "Q", 4: "N", 5: "C" },
    7: { 1: "G", 2: "V", 3: "R" },
    8: { 1: "C", 2: "Z", 3: "S", 4: "P", 5: "D", 6: "L", 7: "R" },
    9: { 1: "D", 2: "S", 3: "J", 4: "V", 5: "G", 6: "P", 7: "B", 8: "F" }
  };

  const peekArray = [];

  for (let i = 0; i < dataArray.length; i++) {
    const amount = dataArray[i].split(" ")[1];
    const currentDock = dataArray[i].split(" ")[3];
    const destinationDock = dataArray[i].split(" ")[5];

    for (let count = 0; count < amount; count++) {
      let inputObj = input[currentDock];
      let outputObj = input[destinationDock];

      let key = Object.keys(inputObj).length;
      const poppedItem = input[currentDock][key];

      delete input[currentDock][Object.keys(input[currentDock]).length];

      let outputKey = Object.keys(outputObj);

      let addKey = outputKey.length + 1;
      input[destinationDock][addKey] = poppedItem;
    }
  }
  for (key in input) {
    peekArray.push(input[key][Object.keys(input[key]).length]);
  }
  console.log(peekArray, "ANSWER PART 1");

  //Part 2

  const peekArray2 = [];

  for (let i = 0; i < dataArray.length; i++) {
    const amount = dataArray[i].split(" ")[1];
    const currentDock = dataArray[i].split(" ")[3];
    const destinationDock = dataArray[i].split(" ")[5];

    const outputObj = input2[destinationDock];

    const bigKey = Object.keys(input2[currentDock]).length;
    const smallKey = bigKey - amount + 1;

    for (let j = smallKey; j <= bigKey; j++) {
      const poppedItem = input2[currentDock][j];
      delete input2[currentDock][j];
      const outputKey = Object.keys(outputObj);
      const addKey = outputKey.length + 1;
      input2[destinationDock][addKey] = poppedItem;
    }
  }

  for (key in input2) {
    peekArray2.push(input2[key][Object.keys(input2[key]).length]);
  }
  console.log(peekArray2, "ANSWER PART 2");
});
