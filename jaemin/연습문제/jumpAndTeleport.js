//프로그래머스 점프와 순간이동
function solution(n) {
  let ans = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      //짝수
      n = Math.floor(n / 2);
    } else {
      n -= 1;
      ans += 1;
    }
  }

  return ans;
}

console.log(solution(5000));
