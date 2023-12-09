//프로그래머스 섬 연결하기

//부모 노드 찾기
const getParent = (parent, x) => {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent, parent[x]));
};

//두 부모 노드 합치는 함수
//각각의 부모 값을 구한 다음에 작은 쪽으로 합쳐줌
const unionParent = (parent, a, b) => {
  a = getParent(parent, a);
  b = getParent(parent, b);

  if (a < b) parent[b] = a;
  else parent[a] = b;
};

//같은 부모를 가지는지 확인 (같은 그래프에 속하는지 확인)
const findParent = (parent, a, b) => {
  a = getParent(parent, a);
  b = getParent(parent, b);

  if (a === b) return true;
  else return false;
};

function solution(n, costs) {
  var answer = 0;

  //cost 오름차순 정렬
  costs.sort((a, b) => a[2] - b[2]);

  //연결 여부를 따지기 위한 parent 배열
  const parent = [];
  //자기 자신 값으로 parent 배열 초기화
  for (let i = 0; i < n; i++) {
    parent.push(i);
  }

  for (let i = 0; i < costs.length; i++) {
    if (!findParent(parent, costs[i][0], costs[i][1])) {
      answer += costs[i][2];
      unionParent(parent, costs[i][0], costs[i][1]);
    }
  }

  return answer;
}

const init = () => {
  console.log(
    solution(4, [
      [0, 1, 1],
      [0, 2, 2],
      [1, 2, 5],
      [1, 3, 1],
      [2, 3, 8],
    ])
  );
};

init();
