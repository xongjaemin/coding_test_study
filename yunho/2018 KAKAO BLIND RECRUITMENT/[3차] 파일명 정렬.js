function solution(files) {
    // 정렬 기준에 따라 파일명 정렬하는 비교 함수
    function compareFiles(a, b) {
        // HEAD 추출
        const headA = a.match(/^[^\d]+/i)[0].toLowerCase();
        const headB = b.match(/^[^\d]+/i)[0].toLowerCase();

        // HEAD가 다르다면 HEAD로 정렬
        if (headA !== headB) {
            return headA.localeCompare(headB);
        }

        // NUMBER 추출
        const numberA = parseInt(a.match(/\d+/)[0]);
        const numberB = parseInt(b.match(/\d+/)[0]);

        // NUMBER가 다르다면 NUMBER로 정렬
        if (numberA !== numberB) {
            return numberA - numberB;
        }

        // 입력 순서 유지
        return 0;
    }

    // 정렬 수행
    files.sort(compareFiles);

    return files;
}

// 테스트
console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
// ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));
// ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
