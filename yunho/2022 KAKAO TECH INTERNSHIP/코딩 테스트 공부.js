function solution(alp, cop, problems) {
    let max_alp = 0;
    let max_cop = 0;
    let time = 0;

    for (let i = 0; i < problems.length; i++) {
        let [a, b, c, d, e] = problems[i];
        max_alp = Math.max(max_alp, a);
        max_cop = Math.max(max_cop, b);
        time += e;
    }

    alp = Math.min(alp, max_alp);
    cop = Math.min(cop, max_cop);
    const INF = Number.POSITIVE_INFINITY;
    let dp = Array.from( Array(max_alp + 1), () => Array(max_cop + 1).fill(INF));
    dp[alp][cop] = 0;

    for (let i = alp; i <= max_alp; i++) {
        for (let j = cop; j <= max_cop; j++) {
            if (i + 1 <= max_alp) {
                dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + 1);
            }
            if (j + 1 <= max_cop) {
                dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j] + 1);
            }

            for (let k = 0; k < problems.length; k++) {
                let [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[k];
                if (i >= alp_req && j >= cop_req) {
                    let next_alp = Math.min(max_alp, i + alp_rwd);
                    let next_cop = Math.min(max_cop, j + cop_rwd);
                    dp[next_alp][next_cop] = Math.min(dp[next_alp][next_cop], dp[i][j] + cost);
                }
            }
        }
    }

    return dp[max_alp][max_cop];
}

console.log(solution(10, 10, [[10,15,2,1,2],[20,20,3,3,4]])); // should return 15
console.log(solution(0, 0, [[0, 0, 2, 1, 2], [4, 5, 3, 1, 2], [4, 11, 4, 0, 2], [10, 4, 0, 4, 2]])); // 13
