function solution(numbers, target) {
    let answer = 0;

    function recursive(current, n){
        if(n === numbers.length){
            if(current === target) answer ++;
            return 0;
        }
        recursive(current + numbers[n], n+1);
        recursive(current - numbers[n], n+1);
    }
    recursive(0, 0)
    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)) // should return 5
