const fs = require("fs");

fs.readFile("./dayTwo.txt", "utf8", function(err, data) {
  if (err) throw err;

  const dataString = data.replace(/\n/g, ",");

  const dataArray = dataString.split(",");

  let totalOne = 0;

  for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i] === 'A Y') { // ROCK v PAPER 2 + 6
          totalOne += 8
      }
      else if (dataArray[i] === 'B X') { //PAPER v ROCK 1 + 0
          totalOne += 1
      }
      else if (dataArray[i] === 'C Z') { //SCISSORS v SCISSORS 3 + 3
          totalOne += 6
      }
      else if (dataArray[i] === 'A X') { //ROCK v ROCK 1 + 3
        totalOne += 4
    }
    else if (dataArray[i] === 'B Z') { //PAPER V SCISSORS 3 + 6
        totalOne += 9
    }
    else if (dataArray[i] === 'C Y') { //SCISSORS v PAPER 2
        totalOne += 2
    }
    else if (dataArray[i] === 'A Z') { //ROCK v SCISSORS 3
        totalOne += 3
    }
    else if (dataArray[i] === 'B Y') { //PAPER v PAPER 2
        totalOne += 5
    }
    else if (dataArray[i] === 'C X') { //SCISSORS v ROCK 1
        totalOne += 7
    }
  }

  console.log(totalOne);

  let totalTwo = 0;

  for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i] === 'A Y') { // ROCK v ROCK 1 + 3
          totalTwo += 4
      }
      else if (dataArray[i] === 'B X') { //PAPER v ROCK 1 + 0
          totalTwo += 1
      }
      else if (dataArray[i] === 'C Z') { //SCISSORS v ROCK 1 + 6
          totalTwo += 7
      }
      else if (dataArray[i] === 'A X') { //ROCK v SCISSORS 3 + 0 
        totalTwo += 3
    }
    else if (dataArray[i] === 'B Z') { //PAPER V SCISSORS 3 + 6
        totalTwo += 9
    }
    else if (dataArray[i] === 'C Y') { //SCISSORS v SCISSORS 3 + 3
        totalTwo += 6
    }
    else if (dataArray[i] === 'A Z') { //ROCK v PAPER 2 + 6
        totalTwo += 8
    }
    else if (dataArray[i] === 'B Y') { //PAPER v PAPER 2 + 3
        totalTwo += 5
    }
    else if (dataArray[i] === 'C X') { //SCISSORS v PAPER 2 + 0
        totalTwo += 2
    }
  }

  console.log(totalTwo);


});
