function solution(N, number) {
    const dp = Array.from(Array(9), () => new Set());

    for(let i = 1; i < 9; i++){
        dp[i].add(Number(String(N).repeat(i)));
        console.log(dp);
        for(let j = 1; j < i; j++){
            dp[j].forEach((x)=>{
                dp[i-j].forEach((y) => {
                    dp[i].add(x+y);
                    dp[i].add(x-y);
                    dp[i].add(x*y);
                    dp[i].add(Number(x/y));
                })
            })
        }
        if(dp[i].has(number)) return i;
    }

    return -1;
}

console.log(solution(5,12)); // should return 4
