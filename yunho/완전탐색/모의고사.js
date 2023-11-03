function solution(answers) {
    let answer = [];
    const firstAnswerSheet = [1,2,3,4,5];
    const secondAnswerSheet = [2,1,2,3,2,4,2,5];
    const thirdAnswerSheet = [3,3,1,1,2,2,4,4,5,5];
    let firstCorrect = 0;
    let secondCorrect = 0;
    let thirdCorrect = 0;
    answers.forEach((value, index) => {
        if(value === firstAnswerSheet[index % firstAnswerSheet.length]) firstCorrect ++;
        if(value === secondAnswerSheet[index % secondAnswerSheet.length]) secondCorrect ++;
        if(value === thirdAnswerSheet[index % thirdAnswerSheet.length]) thirdCorrect ++;
    })
    const max = Math.max(firstCorrect, secondCorrect, thirdCorrect);
    if(firstCorrect === max) answer.push(1);
    if(secondCorrect === max) answer.push(2);
    if(thirdCorrect === max) answer.push(3);

    return answer;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));
