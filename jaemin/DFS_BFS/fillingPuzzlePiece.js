//프로그래머스 퍼즐 조각 채우기

//퍼즐조각 90도 회전
const rotatePiece90 = (piece) => {
  let minX = Infinity;
  let minY = Infinity;
  const rotatedPiece = [];
  for (let i = 0; i < piece.length; i++) {
    const [y, x] = piece[i];
    const ny = -x;
    const nx = y;
    minX = Math.min(minX, nx);
    minY = Math.min(minY, ny);

    rotatedPiece.push([-x, y]); // x와 y를 교환하고, x 값에 -1을 곱하여 반전
  }

  for (let i = 0; i < rotatedPiece.length; i++) {
    rotatedPiece[i][0] -= minY;
    rotatedPiece[i][1] -= minX;
  }

  return rotatedPiece;
};

function solution(game_board, table) {
  var answer = 0;
  const tablePieces = [];
  const boardEmpty = [];

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  //퍼즐조각 찾기
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      const queue = [[0, 0, []]]; //y, x, 퍼즐조각위치, 최소 y값, 최소 x값
      if (table[i][j] === 1) {
        queue[0] = [i, j, []];
        let minY = i;
        let minX = j;

        while (queue.length > 0) {
          const arr = [];
          let [y, x, pieces] = queue.shift();

          minY = Math.min(y, minY);
          minX = Math.min(x, minX);

          if (table[y][x] !== 0) {
            pieces.push([y, x]);
            table[y][x] = 0;
          }

          for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            if (
              ny >= 0 &&
              nx >= 0 &&
              nx < table[0].length &&
              ny < table.length &&
              table[ny][nx] === 1
            ) {
              queue.push([ny, nx, pieces]);
            }
          }

          if (queue.length === 0) {
            for (let i = 0; i < pieces.length; i++) {
              pieces[i][0] -= minY;
              pieces[i][1] -= minX;
            }
            tablePieces.push(pieces);
          }
        }
      }
    }
  }

  // 빈 칸 찾기
  for (let i = 0; i < game_board.length; i++) {
    for (let j = 0; j < game_board[i].length; j++) {
      const queue = [[0, 0, []]]; //y, x, 퍼즐조각위치, 최소 y값, 최소 x값
      if (game_board[i][j] === 0) {
        queue[0] = [i, j, []];
        let minY = i;
        let minX = j;

        while (queue.length > 0) {
          const arr = [];
          let [y, x, pieces] = queue.shift();

          minY = Math.min(y, minY);
          minX = Math.min(x, minX);

          if (game_board[y][x] !== 1) {
            pieces.push([y, x]);
            game_board[y][x] = 1;
          }

          for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            if (
              ny >= 0 &&
              nx >= 0 &&
              nx < game_board[0].length &&
              ny < game_board.length &&
              game_board[ny][nx] === 0
            ) {
              queue.push([ny, nx, pieces]);
            }
          }

          if (queue.length === 0) {
            for (let i = 0; i < pieces.length; i++) {
              pieces[i][0] -= minY;
              pieces[i][1] -= minX;
            }
            boardEmpty.push(pieces);
          }
        }
      }
    }
  }

  // 각 퍼즐 조각을 회전하면서 빈 칸과 일치하는지 확인
  for (let i = 0; i < tablePieces.length; i++) {
    let pieceMatched = false;
    let rotatedPiece = tablePieces[i];

    for (let j = 0; j < 4; j++) {
      rotatedPiece = rotatePiece90(rotatedPiece);

      for (let k = 0; k < boardEmpty.length; k++) {
        if (
          JSON.stringify(rotatedPiece.sort()) ===
          JSON.stringify(boardEmpty[k].sort())
        ) {
          answer += rotatedPiece.length;
          pieceMatched = true;
          boardEmpty.splice(k, 1); // 이미 일치한 빈 칸은 다시 사용하지 않도록 삭제
          break;
        }
      }

      if (pieceMatched) {
        break;
      }
    }
  }

  return answer;
}

const init = () => {
  console.log(
    solution(
      [
        [1, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 0],
      ],
      [
        [1, 0, 0, 1, 1, 0],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 1],
        [0, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 0],
      ]
    )
  );
};

init();
