// const fibo = (n) => {
//   if (n < 2) return 1;
//   else {
//     return fibo(n - 2) + fibo(n - 1);
//   }
// };

const arr = new Array(100).fill(0);
// const fibo = (n) => {
//   if (arr[n] > 0) return arr[n];
//   else {
//     if (n < 2) {
//       arr[n] = 1;
//       return arr[n];
//     } else {
//       arr[n] = fibo(n - 2) + fibo(n - 1);
//       console.log(arr);
//       return arr[n];
//     }
//   }
// };

const fibo = (n) => {
  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  return arr[n];
};

console.log(fibo(5));
