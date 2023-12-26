function solution(arr1, arr2) {
  let answer = Array.from({ length: arr1.length }, (x) => []);
  let reverseArr2 = Array.from({ length: arr2[0].length }, (x) => []);

  // arr2 행•열 뒤집기
  arr2.forEach((value, row) => {
    value.forEach((v, column) => {
      reverseArr2[column].push(v);
    });
  });

  // 행렬 곱셈
  arr1.forEach((front, m) => {
    reverseArr2.forEach((back, n) => {
      let sum = 0;
      let min = Math.min(front.length, reverseArr2[0].length); // 둘 중 짧은 길이 만큼만 계산.
      for (let i = 0; i < min; i++) {
        sum += front[i] * back[i];
      }
      answer[m].push(sum);
    });
  });

  return answer;
}
