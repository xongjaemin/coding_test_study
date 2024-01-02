function solution(s) {
    let answer = s.length;  // 기본적으로 문자열 전체를 사용한 경우의 길이를 초기값으로 설정

    // 문자열을 자를 단위를 1부터 s의 길이까지 변경해가며 비교
    for (let unit = 1; unit <= Math.floor(s.length / 2); unit++) {
        let compressed = ""; // 압축 결과 초기화
        let prev_substr = s.slice(0, unit); // 시작부터 단위까지 초기 substr
        let count = 1; // 배수 1로 설정

        for (let i = unit; i < s.length; i += unit) {
            const current_substr = s.slice(i, i + unit); // 현재 substr

            if (prev_substr === current_substr) { // 이전과 같은 값 확인
                count += 1; // 배수 + 1
            } else {
                if (count > 1) { // 이전과 같지 않은데 배수가 1보다는 큰 상태
                    compressed += count; // 압축 결과에 배수 삽입
                }
                compressed += prev_substr; // 압축 결과에 기준이 되는 prev_substr 삽입
                count = 1; // 배수는 1로 초기화
                prev_substr = current_substr; // prev_substr을 현재 substr로 초기화(서로 달라서 새로운 값으로 업데이트)
            }
        }

        if (count > 1) {
            compressed += count;
        }
        compressed += prev_substr;

        // 최소 길이 갱신
        answer = Math.min(answer, compressed.length);
    }

    return answer;
}

// 테스트 예시
console.log(solution("aabbaccc"));  // 7
console.log(solution("ababcdcdababcdcd"));  // 9
console.log(solution("abcabcdede"));  // 8
console.log(solution("abcabcabcabcdededededede"));  // 14
console.log(solution("xababcdcdababcdcd"));  // 17