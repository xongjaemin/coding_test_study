//프로그래머스 멀리 뛰기
function solution(n) {
  let answer = 0;

  const arr = new Array(n + 1).fill(0);
  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
  }

  return arr[n];
}

console.log(solution(4));
