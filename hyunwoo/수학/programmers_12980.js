function solution(n) {
  let ans = 0;

  while (n !== 0) {
    if (n % 2 === 0) {
      // 짝수면 순간이동
      n /= 2;
    } else {
      // 홀수면 점프해서 짝수로 변경
      n--;
      ans++;
    }
  }

  return ans;
}
