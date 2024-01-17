//pccp 기출문제 4번 수레 움직이기 (실패)
function solution(maze) {
  var answer = 0;

  const n = maze.length;
  const m = maze[0].length;

  let dx = [-1, 1, 0, 0]; //좌우 이동
  let dy = [0, 0, -1, 1]; //상하 이동
  let redQ = [[0, 0]]; //y, x
  let blueQ = [[0, 0]]; //y, x
  let redEnd = [0, 0]; //빨간색 수레 도착점
  let blueEnd = [0, 0]; //파란색 수레 도착점

  //출발 노드 큐에 넣어주기
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 1) redQ = [[i, j]];
      if (maze[i][j] === 2) blueQ = [[i, j]];
      if (maze[i][j] === 3) redEnd = [i, j];
      if (maze[i][j] === 4) blueEnd = [i, j];
    }
  }

  while (redQ.length > 0) {
    let [y, x] = redQ.shift();
    answer += 1;
    if (y === redEnd[0] && x === redEnd[1]) break;

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        maze[ny][nx] !== 5 &&
        maze[ny][nx] !== 6 && //빨간색이 방문한 지점은 6으로 표기
        !(ny === blueQ[0] && nx === blueQ[1]) //파란색 수레가 위치한 곳
      ) {
        redQ.push([ny, nx]);
        maze[ny][nx] = 6;
      }
    }

    if (blueQ.length > 0) {
      let [y, x] = blueQ.shift();
      if (y === blueEnd[0] && x === blueEnd[1]) {
        blueQ = [];
      } else {
        for (let i = 0; i < 4; i++) {
          let ny = y + dy[i];
          let nx = x + dx[i];

          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < n &&
            ny < m &&
            maze[ny][nx] !== 5 &&
            maze[ny][nx] !== 7 && //파란색이 방문한 지점은 7로 표기
            !(ny === redQ[0] && nx === redQ[1]) //빨간색 수레가 위치한 곳
          ) {
            blueQ.push([ny, nx]);
            maze[ny][nx] = 7;
          }
        }
      }
    }
  }

  if (blueQ.length > 0) answer -= 1;
  while (blueQ.length > 0) {
    let [y, x] = blueQ.shift();
    answer += 1;
    if (y === blueEnd[0] && x === blueEnd[1]) break;

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        maze[ny][nx] !== 5 &&
        maze[ny][nx] !== 7 &&
        !(ny === redEnd[0] && nx === redEnd[1]) //파란색 수레가 위치한 곳
      ) {
        blueQ.push([ny, nx]);
        maze[ny][nx] = 7;
      }
    }
  }

  return answer;
}

const init = () => {
  console.log(
    solution([
      [1, 4],
      [0, 0],
      [2, 3],
    ])
  );
};

init();
