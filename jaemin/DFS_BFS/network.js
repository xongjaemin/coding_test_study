//프로그래머스 네트워크
// function solution(n, computers) {
//   var answer = 0;
//   let visited = new Array(n).fill(false);

//   const dfs = (index, visited, computers) => {
//     visited[index] = true;
//     for (let i = 0; i < n; i++) {
//       if (computers[index][i] === 1 && visited[i] === false) {
//         dfs(i, visited, computers);
//       }
//     }
//   };

//   for (let i = 0; i < n; i++) {
//     if (visited[i] === false) {
//       dfs(i, visited, computers);
//       answer += 1;
//     }
//   }

//   return answer;
// }

//유니온 파인드 풀이
const find = (x, parent) => {
  if (x === parent[x]) return x;
  return (parent[x] = find(parent[x], parent));
};

const union = (x, y, parent) => {
  x = find(x, parent);
  y = find(y, parent);

  if (x === y) return;

  if (x < y) parent[y] = x;
  else parent[x] = y;
};

function solution(n, computers) {
  let parent = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && computers[i][j] === 1) {
        union(i, j, parent);
      }
    }
  }

  let ans = new Set();
  for (let i = 0; i < n; i++) {
    ans.add(find(parent[i], parent));
  }

  return ans.size;
}

const init = () => {
  console.log(
    solution(5, [
      [1, 0, 0, 0, 1],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1],
      [1, 0, 0, 1, 1],
    ])
  );
};

init();
