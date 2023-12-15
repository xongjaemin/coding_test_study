function solution(board) {
  let depth = 0;
  board = board.map((items) => items.split(""));
  const needVisited = [];
  const w = board.length; // 가로 길이
  const h = board[0].length; // 세로 길이
  const dx = [-1, 1, 0, 0]; // 상하좌우 방향
  const dy = [0, 0, -1, 1];

  // Start 찾기
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (board[i][j] == "R") {
        board[i][j] = "V"; // 방문 여부 표시
        needVisited.push([i, j]);
        break;
      }
    }
  }

  //BFS
  while (needVisited.length > 0) {
    let currentList = needVisited.length;
    while (currentList > 0) {
      let [x, y] = needVisited.shift();
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        // 벽 또는 장애물까지 미끄러지기
        while (nx >= 0 && nx < w && ny >= 0 && ny < h && board[nx][ny] != "D") {
          nx += dx[i];
          ny += dy[i];
        }

        // 미끄러지기 직전 위치로 이동
        nx -= dx[i];
        ny -= dy[i];

        if (board[nx][ny] == "G") return depth + 1;
        if (board[nx][ny] != "V") {
          needVisited.push([nx, ny]);
          board[nx][ny] = "V";
        }
      }
      currentList--;
    }
    depth++;
  }

  return -1;
}

const board = ["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."];
console.log(solution(board));
