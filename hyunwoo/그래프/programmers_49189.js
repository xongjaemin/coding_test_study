function solution(n, edge) {
  let answer = 0; // 최대 간선이 걸리는 노드의 갯수
  let maxVertex = 0; // 최대 간선 수

  // Graph 생성
  let graph = {};
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  edge.forEach((value, index) => {
    const [a, b] = value;
    graph[a].push(b);
    graph[b].push(a);
  });

  // 1번에서 다른 노드까지 최소 간선 개수에 대해 설정
  let oneToNext = Array.from({ length: n + 1 }, () => Infinity);
  oneToNext[1] = 0; // 1번 노드는 0으로 설정

  // 다음에 방문할 노드
  let nextNode = [];
  graph[1].forEach((v) => {
    oneToNext[v] = 1;
    nextNode.push(v);
  });

  // 다음 방문할 노드가 존재하지 않을 때까지 반복
  while (nextNode.length > 0) {
    const next = nextNode.shift();
    graph[next].forEach((v) => {
      if (oneToNext[next] + 1 < oneToNext[v]) {
        oneToNext[v] = oneToNext[next] + 1;
        nextNode.push(v);
        maxVertex = maxVertex < oneToNext[v] ? oneToNext[v] : maxVertex;
      }
    });
  }

  // 1번 노드 기준 vetext 개수를 순회하면서 최대 vertext 수의 노드 갯수 counting
  oneToNext.forEach((value) => {
    answer += value == maxVertex ? 1 : 0;
  });

  return answer;
}
