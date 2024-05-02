const getCombination = (arr, r) => {
  if (r === 1) {
    return arr.map((el) => [el]);
  }
  const result = [];

  arr.forEach((fixed, i) => {
    console.log(i, "번째");
    const rest = arr.slice(i + 1);
    const combinations = getCombination(rest, r - 1);
    const attached = combinations.map((a) => [fixed, ...a]);
    console.log(attached);
    result.push(...attached);
  });

  return result;
};

const getPermutation = (arr, r) => {
  if (r === 1) return arr.map((el) => [el]);
  const result = [];

  arr.forEach((fixed, i) => {
    const rest = [...arr];
    rest.splice(i, 1);
    const permutations = getPermutation(rest, r - 1);
    const attached = permutations.map((a) => [fixed, ...a]);
    result.push(...attached);
  });

  return result;
};

// console.log(getCombination([1, 2, 3, 4], 3));
console.log(getPermutation([1, 2, 3, 4], 3));
