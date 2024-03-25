//프로그래머스 배달 다익스트라
const findMinCostIndex = (costFromStart, visited) => {
  let min = Infinity;
  let index = -1;

  for (let i = 1; i < costFromStart.length; i++) {
    if (costFromStart[i] < min && !visited[i]) {
      min = costFromStart[i];
      index = i;
    }
  }

  return index;
};

function solution(N, road, K) {
  let answer = 0;

  const costs = Array.from(Array(N), () => Array(N).fill(Infinity));
  const costFromStart = Array(N).fill(Infinity);
  const visited = Array(N).fill(false);
  visited[0] = true;

  for (let i = 0; i < costs.length; i++) {
    costs[i][i] = 0;
  }

  for (const element of road) {
    const [start, end, cost] = element;
    costs[start - 1][end - 1] = Math.min(costs[start - 1][end - 1], cost);
    costs[end - 1][start - 1] = Math.min(costs[end - 1][start - 1], cost);

    if (start === 1 || end === 1) {
      const target = start === 1 ? end - 1 : start - 1;
      costFromStart[target] = Math.min(costFromStart[target], cost);
    }
  }

  while (true) {
    const currentIdx = findMinCostIndex(costFromStart, visited);
    if (currentIdx === -1 || costFromStart[currentIdx] > K) break;

    visited[currentIdx] = true;
    for (let i = 0; i < N; i++) {
      costFromStart[i] = Math.min(
        costFromStart[i],
        costFromStart[currentIdx] + costs[currentIdx][i]
      );
    }
  }

  for (let i = 0; i < N; i++) {
    if (costFromStart[i] <= K) answer++;
  }

  return answer;
}

console.log(
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
  )
);
