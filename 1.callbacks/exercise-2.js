const userAnswers = [];

function confirmExample(description) {
  const result = confirm(description);
  return result;
}

function promptExample(description) {
  const result = prompt(description);
  return result;
}

function father(description, callback) {
  const result = callback(description);
  userAnswers.push(result);
}

father("Que tal estas?", confirmExample);
father("Hola!", promptExample);
father("Cual es tu edad?", promptExample);
father("Ok", confirmExample);

console.log(userAnswers);