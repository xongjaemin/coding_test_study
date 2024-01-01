//프로그래머스 게임 맵 최단거리
function solution(maps) {
  let q = [[0, 0, 1]]; //큐 배열(y, x, 카운트)
  const dy = [0, 0, -1, 1]; //상하 이동
  const dx = [-1, 1, 0, 0]; //좌우 이동
  const n = maps.length; //y 길이
  const m = maps[0].length; //x 길이

  while (q.length > 0) {
    let [y, x, count] = q.shift();
    if (y === n - 1 && x === m - 1) return count; //최종경로일 때 count return

    for (let j = 0; j < 4; j++) {
      let ny = y + dy[j];
      let nx = x + dx[j];

      //맵을 벗어나지 않는 조건 && 경로가 1일 때
      if (nx >= 0 && ny >= 0 && nx < m && ny < n && maps[ny][nx] === 1) {
        q.push([ny, nx, count + 1]);
        maps[ny][nx] = 0;
      }
    }
  }

  return -1;
}

const init = () => {
  console.log(
    solution([
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ])
  );
};

init();
