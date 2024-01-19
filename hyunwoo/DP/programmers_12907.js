function solution(n, money) {
  let moneyCase = Array.from({ length: n + 1 }, (x) => 0);
  moneyCase[0] = 1;

  for (let coin of money.sort((a, b) => a - b)) {
    // 젤 작은 코인부터 업데이트
    for (let i = 1; i < n + 1; i++) {
      // 1부터 해당 금액까지 경우의 수 업데이트
      moneyCase[i] += i - coin > -1 ? moneyCase[i - coin] : 0;
    }
  }

  return moneyCase[n];
}
