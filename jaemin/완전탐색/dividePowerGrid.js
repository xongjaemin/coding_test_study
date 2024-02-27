//프로그래머스 전력망을 둘로 나누기

const findParent = (a, parent) => {
  if (a === parent[a]) return a;
  return (parent[a] = findParent(parent[a], parent));
};

const union = (a, b, parent) => {
  const x = findParent(a, parent);
  const y = findParent(b, parent);

  if (x === y) return;
  else if (x < y) parent[y] = x;
  else if (x > y) parent[x] = y;
};

function solution(n, wires) {
  var answer = -1;

  const parent = new Array(n + 1);

  for (let i = 0; i < wires.length; i++) {
    for (let j = 0; j <= n; j++) {
      parent[j] = j;
    }

    //전선 하나씩 끊기
    const dividedWires = [...wires];
    dividedWires.splice(i, 1);
    dividedWires.forEach((wire, j) => {
      union(wire[0], wire[1], parent);
    });
    const parentMap = new Map();
    for (let j = 1; j <= n; j++) {
      const currentParent = findParent(j, parent);
      if (parentMap.get(currentParent) === undefined) {
        parentMap.set(currentParent, 1);
      } else {
        parentMap.set(currentParent, parentMap.get(currentParent) + 1);
      }
    }

    //첫번째 전력망과 두번째 전력망의 차를 구하기
    const parentArray = [...parentMap];
    const first = parentArray[0][1];
    const second = parentArray[1][1];
    const sub = first > second ? first - second : second - first;
    if (answer === -1) answer = sub;
    else if (sub < answer) answer = sub;
  }

  return answer;
}

const init = () => {
  console.log(
    solution(4, [
      [1, 2],
      [2, 3],
      [3, 4],
    ])
  );
};

init();
