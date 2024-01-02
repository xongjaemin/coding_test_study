function solution(n) {
    const board = Array.from(Array(n), () => Array(n).fill(0));

    const solutions = [];

    // 유효한 위치인지 확인하는 함수
    function isValid(row, col) {
        // 위부터 한 번만 퀸을 놓기 때문에 행은 볼 필요 없다.
        // 같은 열에 퀸이 있는지 확인
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 1) {
                return false;
            }
        }

        // 위부터 내려오면서 확인하기 때문에 아래에는 퀸이 무조건 없다.
        // 왼쪽 위 대각선에 퀸이 있는지 확인
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 1) {
                return false;
            }
        }

        // 오른쪽 위 대각선에 퀸이 있는지 확인
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 1) {
                return false;
            }
        }

        return true;
    }

    // 백트래킹 함수
    function backtrack(row) {
        if (row === n) {
            // 모든 행에 퀸을 배치한 경우 종료
            solutions.push(board.map(row => row.slice()));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                // 현재 위치에 퀸을 배치
                board[row][col] = 1;

                // 다음 행으로 이동
                backtrack(row + 1);

                // 백트래킹: 현재 위치의 퀸을 제거하여 다른 위치에 배치 가능하도록 한다.
                board[row][col] = 0;
                console.log('백트래킹이 실행된 시점:',board, row,col);
            }
        }
    }

    // 첫 번째 행부터 시작
    backtrack(0);
    console.log(solutions);
    return solutions.length;
}

console.log(solution(4)); // should return 2