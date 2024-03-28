function solution(N, road, K) {
  let answer = 0;
  let minCost = Array.from({ length: N + 1 }, () => Infinity);
  let graph = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => Infinity)
  );

  // 초기갑 설정
  minCost[1] = 0;
  for (let i = 0; i < N; i++) {
    graph[i][i] = 0;
  }

  road.forEach((data) => {
    const [city1, city2, time] = data;
    graph[city1][city2] = Math.min(graph[city1][city2], time);
    graph[city2][city1] = Math.min(graph[city1][city2], time);
  });

  // 업데이트
  let queue = [1];
  while (queue.length > 0) {
    const city = queue.shift();
    graph[city].forEach((time, toCity) => {
      if (time === -1) return;

      let curTime = minCost[toCity];
      let newTime = minCost[city] + graph[city][toCity];
      if (newTime < curTime) {
        minCost[toCity] = newTime;
        queue.push(toCity);
      }
    });
  }

  return minCost.filter((value) => value <= K).length;
}
