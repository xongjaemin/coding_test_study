function solution(brown, yellow){
    let answer = [];
    let total = brown + yellow;

    for(let i = 3; i < total; i ++){
        if(total % i == 0){
            const row = total / i;
            const col = i;

            if((row-2)*(col-2) === yellow){
                return [row, col];
            }
        }
    }
    return answer;
}

console.log(solution(10, 2));
