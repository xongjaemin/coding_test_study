function solution(a, b, g, s, w, t) {
  let totalCity = g.length;
  let [start, end] = [0, 10 ** 5 * 2 * 10 ** 9 * 2];
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    let [gold, silver, total] = [0, 0, 0];

    for (let i = 0; i < totalCity; i++) {
      const ableDeliver = Math.round(mid / (t[i] * 2)); // 가능 왕복 횟수, 반올림하는 이유는 마지막 편도 고려
      const ableCarry = ableDeliver * w[i]; // 총 운반 가능한 무게
      gold += Math.min(g[i], ableCarry); // 보유한 금과 운반 가능한 금 비교
      silver += Math.min(s[i], ableCarry); // 보유한 은과 운반 가능한 은 비교
      total += Math.min(g[i] + s[i], ableCarry);
    }

    if (gold >= a && silver >= b && total >= a + b) end = mid - 1;
    else start = mid + 1;

    mid = Math.floor((start + end) / 2);
  }

  return start;
}
