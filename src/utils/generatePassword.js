import { functionObject } from "./getCharacters";
import shuffleArray from "./shuffleArray";
export default function generatePassword(length, passwordCriteria) {
  let password = [];
  let i = 0;
  while (i < length) {
    Object.keys(passwordCriteria).forEach((type) => {
      if (passwordCriteria[type]) {
        password.push(functionObject[type]());
        i += 1;
      }
    });
  }
  shuffleArray(password);
  return password.join("");
}