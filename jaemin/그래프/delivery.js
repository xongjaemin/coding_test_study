//프로그래머스 배달
function solution(N, road, K) {
  var answer = N;
  const costs = Array.from(Array(N), () => Array(N).fill(Infinity));

  for (let i = 0; i < costs.length; i++) {
    costs[i][i] = 0;
  }

  for (element of road) {
    const [start, end, cost] = element;
    if (costs[start - 1][end - 1] > cost) {
      costs[start - 1][end - 1] = cost;
      costs[end - 1][start - 1] = cost;
    }
  }

  for (let i = 0; i < N; i++) {
    //i번째 인덱스를 거쳐서 가기
    for (let j = 0; j < N; j++) {
      if (i === j) continue;
      //j번째 인덱스 업데이트하기
      for (let k = 0; k < N; k++) {
        if (costs[j][k] > costs[j][i] + costs[i][k])
          costs[j][k] = costs[j][i] + costs[i][k];
      }
    }
  }

  for (let i = 0; i < costs.length; i++) {
    if (costs[0][i] > K) answer--;
  }

  return answer;
}

solution(
  6,
  [
    [1, 2, 1],
    [1, 3, 2],
    [2, 3, 2],
    [3, 4, 3],
    [3, 5, 2],
    [3, 5, 3],
    [5, 6, 1],
  ],
  4
);
