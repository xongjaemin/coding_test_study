function solution(s) {
    let answer = '';
    let words = s.split(" ");
    const numbers = words.map(value => {
        return parseInt(value);
    })
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    answer += min + " " + max;
    return answer;
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
