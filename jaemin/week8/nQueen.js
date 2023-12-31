//프로그래머스 N-Queen
var answer = 0;
const isValid = (board, row) => {
  for (let i = 0; i < row; i++) {
    if (board[i] === board[row]) return false; //열이 똑같은 경우
    //대각선의 경우
    else if (
      row + board[row] === i + board[i] ||
      row - board[row] === i - board[i]
    )
      return false;
  }
  return true;
};
const putQueen = (board, row, n) => {
  if (row === n) {
    //마지막 행까지 퀸을 두면 answer 증가
    answer += 1;
    return;
  } else {
    //퀸 두기
    for (let i = 0; i < n; i++) {
      board[row] = i;
      if (isValid(board, row)) putQueen(board, row + 1, n);
    }
  }
};

function solution(n) {
  const board = new Array(n).fill(0); //index: 퀸의 행, val: 퀸의 열
  putQueen(board, 0, n);
  return answer;
}

const init = () => {
  console.log(solution(4));
};

init();
