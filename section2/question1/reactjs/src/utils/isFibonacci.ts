const isFibonacci = (number: number): boolean => {
  let result = false;
  const sequence = [0, 1];
  if (number >= 0 && number <= 3) return true;
  for (let i: number = 2; i <= number; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
    if (sequence[i] === number) {
      result = true;
      break;
    }
  }
  return result;
};

export default isFibonacci;
