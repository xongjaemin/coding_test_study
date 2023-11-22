function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b); // 오름차순 정렬
  B.sort((a, b) => b - a); // 내림차순 정렬

  A.forEach((value, index) => {
    answer += value * B[index];
  });

  return answer;
}
