function solution(info, edges) {
  let answer = 0;
  const graph = Array.from({ length: info.length }, () => []);

  // 그래프 생성
  edges.forEach((value) => graph[value[0]].push(value[1]));

  const dfs = (current, sheepCount, wolfCount, queue) => {
    if (info[current] === 0) {
      sheepCount++;
      answer = Math.max(sheepCount, answer);
    } else {
      wolfCount++;
    }

    // 만약 늑대가 양을 잡아 먹을 조건일 때
    if (sheepCount === wolfCount) return;
    else {
      graph[current].forEach((value) => queue.push(value));
      queue.forEach((nextNode, index) => {
        let tmpQueue = [...queue];
        tmpQueue.splice(index, 1);
        dfs(nextNode, sheepCount, wolfCount, tmpQueue);
      });
    }
  };

  dfs(0, 0, 0, []);

  return answer;
}

let info = [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1];
let edges = [
  [0, 1],
  [1, 2],
  [1, 4],
  [0, 8],
  [8, 7],
  [9, 10],
  [9, 11],
  [4, 3],
  [6, 5],
  [4, 6],
  [8, 9],
];

console.log(solution(info, edges));
