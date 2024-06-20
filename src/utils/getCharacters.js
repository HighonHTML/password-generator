import generateRandomNumber from "./generateRandomNumber";

const specialCharacterObject = {
  1: "!",
  2: "@",
  3: "#",
  4: "$",
  5: "%",
  6: "^",
  7: "&",
  8: "*",
};

function upperCase() {
  return String.fromCharCode(generateRandomNumber(65, 90));
}
function lowerCase() {
  return String.fromCharCode(generateRandomNumber(97, 122));
}
function special() {
  return specialCharacterObject[generateRandomNumber(1, 8)];
}
function number() {
  return String.fromCharCode(generateRandomNumber(48, 57));
}

const functionObject = {
  upperCase,
  lowerCase,
  special,
  number,
};

export { functionObject };
