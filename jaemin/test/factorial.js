// const fact = (n) => {
//   if (n < 3) return n;
//   else {
//     return n * fact(n - 1);
//   }
// };

const arr = new Array(100).fill(0);
// const fact = (n) => {
//   if (arr[n] > 0) return arr[n];
//   else {
//     if (n < 3) {
//       arr[n] = n;
//       return arr[n];
//     } else {
//       arr[n] = n * fact(n - 1);
//       return arr[n];
//     }
//   }
// };
const fact = (n) => {
  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= n; i++) {
    arr[i] = i * arr[i - 1];
  }

  return arr[n];
};

console.log(fact(5));
