//프로그래머스 가장 먼 노드
function solution(n, edge) {
  var answer = 0;

  //연결 정보를 담을 2차원 배열
  const connects = new Array(n).fill().map(() => []);

  //양방향 그래프 연결 정보
  for (const e of edge) {
    connects[e[0] - 1].push(e[1] - 1);
    connects[e[1] - 1].push(e[0] - 1);
  }

  const queue = [0];
  const visited = [1]; //방문여부 + 첫번째 노드로부터 얼마나 떨어져있는지

  while (queue.length) {
    const current = queue.shift();
    for (let next of connects[current]) {
      if (!visited[next]) {
        visited[next] = visited[current] + 1;
        queue.push(next);
      }
    }
  }

  const max = Math.max(...visited);
  answer = visited.filter((el) => el === max).length;

  return answer;
}

const init = () => {
  console.log(
    solution(6, [
      [3, 6],
      [4, 3],
      [3, 2],
      [1, 3],
      [1, 2],
      [2, 4],
      [5, 2],
    ])
  );
};

init();
