const isPrime = (number: number): boolean => {
  let isPrime = true;
  if (number === 1) return true;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};
export default isPrime;
