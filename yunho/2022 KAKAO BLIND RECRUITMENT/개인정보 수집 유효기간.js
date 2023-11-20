function solution(today, terms, privacies) {
    const answer = [];
    const termsMap = new Map();

    // 약관별 유효기간을 Map에 저장
    terms.forEach((value) => {
        const [type, term] = value.split(" ");
        termsMap.set(type, Number(term));
    });

    // 개인정보 파기 여부 판단
    privacies.forEach((value, index) => {
        const [date, detailType] = value.split(" ");
        const daysToStart = calculateAllDays(date);
        const term = termsMap.get(detailType) * 28;

        if (daysToStart + term <= calculateAllDays(today)) {
            answer.push(index + 1);
        }
    });

    return answer;
}

// 날짜를 계산하는 함수
function calculateAllDays(date) {
    const [year, month, day] = date.split(".");
    return parseInt(year) * 12 * 28 + (parseInt(month) - 1) * 28 + parseInt(day);
}

// 테스트 케이스
console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]));
// should return [1, 3]
