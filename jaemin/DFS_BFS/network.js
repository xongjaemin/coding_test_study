//프로그래머스 네트워크
function solution(n, computers) {
  var answer = 0;
  let visited = new Array(n).fill(false);

  const dfs = (index, visited, computers) => {
    visited[index] = true;
    for (let i = 0; i < n; i++) {
      if (computers[index][i] === 1 && visited[i] === false) {
        dfs(i, visited, computers);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      dfs(i, visited, computers);
      answer += 1;
    }
  }

  return answer;
}

const init = () => {
  console.log(
    solution(3, [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ])
  );
};

init();
