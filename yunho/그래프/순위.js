function solution(n, results) {
    let count = 0;
    // 각 선수가 이긴 선수와 진 선수를 배열에 저장
    const rangeN = Array(n).fill(0).map((value, index) => index + 1);
    const wins = {};
    const loses = {};
    rangeN.map((key) => {
        wins[key] = new Set([]);
        loses[key] = new Set([]);
    });
    results.forEach((result) => {
        const [winner, loser] = result;
        wins[winner].add(loser);
        loses[loser].add(winner);
    });
    // 각 선수가 이긴 선수와 진 선수의 명 수를 카운트 해서 순위를 확정
    rangeN.forEach(player => {
        // player를 이긴 사람(loses[player])은 player에게 진 선수(wins[player])들에게 이긴다.
        for(winner of loses[player]){ // ex) 2를 이긴 선수들은
            for(loser of wins[player]){ // ex) 2에게 진 선수들에게
                wins[winner].add(loser); // ex) 이긴다.
            }
        }
        // player에게 진 사람(wins[player])은 player에게 이긴 선수(loses[player])들에게 진다.
        for(loser of wins[player]){ // ex) 2에게 진 선수들은
            for(winner of loses[player]){ // ex) 2에게 이긴 선수들에게
                loses[loser].add(winner); // ex) 진다.
            }
        }
    })
    // 이긴 선수와 진 선수를 모두 합했을 때 n-1명이면 순위를 확정지을 수 있다.
    for(let i = 1; i <= n; i ++){
        if(wins[i].size + loses[i].size === n - 1) count ++;
    }


    return count;
}

console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]])) // should return 2
/*
2번 선수는 [1, 3, 4] 선수에게 패배했고 5번 선수에게 승리했기 때문에 4위입니다.
5번 선수는 4위인 2번 선수에게 패배했기 때문에 5위입니다.
그렇기 때문에 정확하게 순위를 매길 수 있는 선수는 2명입니다.
*/