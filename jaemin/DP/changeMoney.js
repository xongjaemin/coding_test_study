//프로그래머스 거스름돈
function solution(n, money) {
  const dp = [1, ...new Array(n).fill(0)];

  for (let i = 0; i < money.length; i++) {
    for (let j = 0; j <= n; j++) {
      if (j >= money[i]) dp[j] += dp[j - money[i]];
    }
  }

  return dp[n];
}

const init = () => {
  solution(5, [1, 2, 5]);
};

init();
