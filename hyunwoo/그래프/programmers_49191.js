function solution(n, results) {
  let answer = 0;
  const win = {};
  const lose = {};

  // 각 선수에 대한 승패 저장형식
  for (let i = 1; i < n + 1; i++) {
    win[i] = new Set([]);
    lose[i] = new Set([]);
  }

  // 각 선수에 대한 경기 결과 저장
  results.forEach((data) => {
    const [winner, loser] = data;
    win[winner].add(loser);
    lose[loser].add(winner);
  });

  // 선수들 경기에 따른 연관 관계
  for (let i = 1; i < n + 1; i++) {
    // 승리 연관 관계
    // i번 선수를 이긴 winner는 i번 선수가 이건 loser한테도 승리
    // winner > i > loser
    for (const winner of [...lose[i]]) {
      if (win[winner].size === 0) continue;
      for (const loser of [...win[i]]) win[winner].add(loser);
    }

    // 패배 연관 관계
    // i번 선수가 이긴 loser는 i번 선수가 진 winner한테도 패배
    // loser < i < winner
    for (const loser of [...win[i]]) {
      if (lose[loser].size === 0) continue;
      for (const winner of [...lose[i]]) lose[loser].add(winner);
    }
  }

  // 승리 패배 관계가 자신을 제외한 모든 선수들을 포함한다면 순위 예측 가능
  for (let i = 1; i < n + 1; i++) {
    if (win[i].size + lose[i].size === n - 1) answer++;
  }

  return answer;
}
