function solution(N, M, area){
    let dp = Array.from(Array(N), () => Array(M).fill(0));
    // 초기값 설정
    dp[0][0] = area[0][0];

    // 첫 번째 행 초기화
    for (let j = 1; j < M; j++) {
        dp[0][j] = dp[0][j - 1] + area[0][j];
    }

    // 첫 번째 열 초기화
    for (let i = 1; i < N; i++) {
        dp[i][0] = dp[i - 1][0] + area[i][0];
    }

    // dp 배열 채우기
    for (let i = 1; i < N; i++) {
        for (let j = 1; j < M; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + area[i][j];
        }
    }

    return dp[N - 1][M - 1];
}

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
//
// let row = null;
// let col = null;
// let count = 0;
// const data = [];
//
// rl.on('line', function (line) {
//     if(!row && !col) {
//         [row, col] = line.split(' ').map(Number);
//     } else {
//         data.push(line.split(' ').map(Number)); // 정수로 변환
//         count += 1;
//     }
//     if(count === row) {
//         rl.close();
//     }
// }).on('close', function() {
//     console.log(solution(row, col, data));
//     process.exit();
// })

console.log(solution(5, 6, [[1,7,3,2,8,0],[9,2,3,4,5,4],[3,4,7,8,2,2],[1,4,3,1,4,1],[3,2,5,5,3,8]]));