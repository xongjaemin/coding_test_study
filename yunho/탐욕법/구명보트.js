function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b); // 몸무게 오름차순으로 정렬
    console.log(people);
    let left = 0;
    let right = people.length - 1;
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            right--;
        }
        answer++;
    }
    return answer;
}

console.log(solution([70,50,80,50], 100));
console.log(solution([70,80,50], 100));
console.log(solution([40,40,20,90], 100));
