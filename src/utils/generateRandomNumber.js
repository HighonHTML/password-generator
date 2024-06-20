export default function generateRandomNumber(upper, lower = 0) {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

