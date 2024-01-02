function solution(prices) {
    let answer = [];
    let n = prices.length;
    for(let i = 0; i < n-1; i ++){
        for(let j = i + 1; j < n; j ++){
            if(prices[i] > prices[j]){
                answer.push(j-i);
                break;
            }
        }
        if(!answer[i]){
            answer.push(n - i - 1);
        }
    }
    answer.push(0);

    return answer;
}

console.log(solution([1, 2, 3, 2, 3])) // should return [4, 3, 1, 1, 0]