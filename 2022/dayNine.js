const input = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];
const markerObject = { H: { "1": 1 }, T: { "1": 1 } };
let currentPlaceH = 1;
let currentPlaceT = 1;

input.forEach((instruction, index) => {
  //console.log(instruction.split(" "))
  const direction = instruction.split(" ")[0];
  const moves = parseInt(instruction.split(" ")[1]);

  switch (direction) {
    case "R":
      //console.log(currentPlace + moves);
      for (let i = 1; i <= moves; i++) {
        const objLengthH = Object.keys(markerObject.H).length;
        const objLengthT = Object.keys(markerObject.T).length;
        markerObject.H[objLengthH + 1] = currentPlaceH + i;
        if (i === 1) {
          markerObject.T[objLengthT + 1] = currentPlaceT;
        } else markerObject.T[objLengthT + 1] = currentPlaceT + i - 1;
      }
      currentPlaceH += moves;
      currentPlaceT = currentPlaceT + moves - 1;
      break;
    case "U":
      //console.log(currentPlace + moves * 10);
      for (let i = 1; i <= moves; i++) {
        const objLengthH = Object.keys(markerObject.H).length;
        const objLengthT = Object.keys(markerObject.T).length;
        markerObject.H[objLengthH + 1] = currentPlaceH + i * 10;
        if (i === 1) {
          markerObject.T[objLengthT + 1] = currentPlaceT;
        } else
          markerObject.T[objLengthT + 1] = currentPlaceT + 1 + (i - 1) * 10;
      }
      currentPlaceH += moves * 10;
      currentPlaceT = currentPlaceH - 10;
      break;
    case "L":
      //console.log(currentPlace - moves);
      for (let i = 1; i <= moves; i++) {
        const objLengthH = Object.keys(markerObject.H).length;
        const objLengthT = Object.keys(markerObject.T).length;
        markerObject.H[objLengthH + 1] = currentPlaceH - i;
        if (i === 1) {
          markerObject.T[objLengthT + 1] = currentPlaceT;
        } else if (i === 2) {
          markerObject.T[objLengthT + 1] = currentPlaceT + 10 - 1;
        } else markerObject.T[objLengthT + 1] = currentPlaceT - (i - 1);
      }
      currentPlaceH -= moves;
      currentPlaceT = currentPlaceT - 10 - (moves - 1);
      break;
    case "D":
      //console.log(currentPlace - moves * 10);
      for (let i = 1; i <= moves; i++) {
        const objLengthH = Object.keys(markerObject.H).length;
        const objLengthT = Object.keys(markerObject.T).length;
        markerObject.H[objLengthH + 1] = currentPlaceH - i * 10;
        if (i === 1) {
          markerObject.T[objLengthT + 1] = currentPlaceT;
        } else markerObject.T[objLengthT + 1] = currentPlaceT - i * 10 - 10;
      }
      currentPlaceH -= moves * 10;
      currentPlaceT = currentPlaceT - 1 - moves;
      break;
    default:
      console.log("direction doesn't exist");
  }
});

const valuesArray = Object.values(markerObject.T);
console.log(valuesArray);
console.log([...new Set(valuesArray)]);
