//프로그래머스 등교길
function solution(m, n, puddles) {
  var answer = 0;

  //   const map = new Array(n);
  //   for (let i = 0; i < map.length; i++) {
  //     map[i] = new Array(m).fill(1);
  //   }

  const map = Array.from(Array(n), () => Array(m).fill(1));

  //물에 잠긴 지역 0으로 표기
  puddles.forEach((el, i) => {
    y = el[1] - 1;
    x = el[0] - 1;
    map[y][x] = 0;

    if (y === 0) {
      for (let i = x + 1; i < m; i++) {
        map[0][i] = 0;
      }
    }
    if (x === 0) {
      for (let i = y + 1; i < n; i++) {
        map[i][0] = 0;
      }
    }
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i > 0 && j > 0 && map[i][j] !== 0) {
        map[i][j] = (map[i - 1][j] + map[i][j - 1]) % 1000000007;
      }
    }
  }

  answer = map[n - 1][m - 1];

  return answer;
}

const init = () => {
  console.log(solution(4, 3, [[2, 2]]));
};

init();
