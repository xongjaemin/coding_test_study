function solution(n) {
    let answer = [];
    const hanoi = (n, start, via, end) => {
        if (n === 1) {
            answer.push([start, end]);
            return;
        }
        hanoi(n - 1, start, end, via);
        answer.push([start, end]);
        hanoi(n - 1, via, start, end);
    };

    hanoi(n, 1, 2, 3);

    return answer;
}