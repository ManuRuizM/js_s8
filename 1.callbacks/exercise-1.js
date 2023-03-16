const numbersList = [];

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function father(a, b, callback) {
  const result = callback(a, b);
  numbersList.push(result);
}

father(12, 3, sum);
father(1, 2, subtract);
father(7, 5, sum);

console.log(numbersList); 