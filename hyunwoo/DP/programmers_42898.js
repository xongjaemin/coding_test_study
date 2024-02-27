function solution(m, n, puddles) {
  const MOD = 1000000007;
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, (_) => 0)
  );
  dp[1][1] = 1;

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      // 시작점일 경우 pass
      if (i === 1 && j === 1) continue;

      // 물 웅덩이 경우 pass
      if (puddles.some(([x, y]) => x === j && y === i)) continue;

      dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
    }
  }

  return dp[n][m];
}
