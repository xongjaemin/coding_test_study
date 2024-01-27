function solution(r1, r2) {
  let count = 0;
  let small = r1 < r2 ? r1 : r2;
  let large = r1 < r2 ? r2 : r1;
  for (let x = 1; x <= large; x++) {
    let maxYCount = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));
    let minYCount = 0;
    if (x < small) minYCount = Math.ceil(Math.sqrt(r1 ** 2 - x ** 2));
    count += maxYCount - minYCount + 1;
  }
  return count * 4;
}
