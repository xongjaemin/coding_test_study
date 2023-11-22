const dfs = (computers, visitied, node) => {
  visitied[node] = true;
  computers.forEach((value, index) => {
    if (node != index && value[node] == 1 && visitied[index] == false) {
      dfs(computers, visitied, index);
    }
  });
};

function solution(n, computers) {
  let answer = 0;
  let visitied = new Array(n).fill(false);

  computers.forEach((value, index) => {
    if (visitied[index] == false) {
      dfs(computers, visitied, index);
      answer++;
    }
  });

  return answer;
}
