function solution(survey, choices) {
    let answer = '';
    const score = new Map();
    const indicator = ['RT', 'CF', 'JM', 'AN'];

    indicator.forEach((value) => {
        score.set(value, [0, 0]);
    });

    survey.forEach((value, index) => {
        const CHOICE = choices[index];
        const KEY = value.split('').sort().join('');
        const [front, back] = score.get(KEY);

        if (CHOICE < 4) {
            score.set(KEY, [front + (value === KEY ? 4 - CHOICE : 0), back + (value !== KEY ? 4 - CHOICE : 0)]);
        } else if (CHOICE > 4) {
            score.set(KEY, [front + (value !== KEY ? CHOICE - 4 : 0), back + (value === KEY ? CHOICE - 4 : 0)]);
        }
    });

    indicator.forEach((value) => {
        const [front, back] = score.get(value);
        answer += front >= back ? value[0] : value[1];
    });

    return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // should return "TCMA"
