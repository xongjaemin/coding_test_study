// 구현
function solution(n) {
  let answer = [];
  let triangleCount = 1; // 현재 삼각형 개수
  let triangleCountMax = Math.ceil(n / 3); // 총 생기는 삼각형 개수
  let count = 1; // 칸에 들어갈 숫자
  let triangle = Array.from({ length: n }, (v, i) =>
    Array.from({ length: i + 1 }, () => -1)
  );

  // 현재 삼각형 개수가 총 삼각형 개수를 넘어설 때까지
  while (triangleCount <= triangleCountMax) {
    const startFloor = (triangleCount - 1) * 2; // 가장 위 층 (ex. 1번)
    const bottomFloor = n - triangleCount; // 삼각형의 가장 바닥 층
    const startIndex = triangleCount - 1; // 층에서 주르륵 내려갈 index number

    triangle = triangle.map((v, i) => {
      if (startFloor <= i && i != bottomFloor)
        // 맨 위층 부터 바닥층 전까지 해당 index에 값 추가
        v[startIndex] = v[startIndex] == -1 ? count++ : v[startIndex];
      else {
        // 맨 바닥 층은 나머지 모든 -1인 칸에 값 추가
        v = v.map((value) => (value == -1 ? (value = count++) : value));
      }
      return v;
    });

    // 거슬러 올라가는 값
    for (let i = n - 1; i > 0; i--) {
      if (startFloor < i && i < bottomFloor) {
        const lastIndex = triangle[i].length - 1 - startIndex;
        triangle[i][lastIndex] =
          triangle[i][lastIndex] == -1 ? count++ : triangle[i][lastIndex];
      }
    }

    triangleCount++;
  }

  triangle.forEach((value) => {
    answer = [...answer, ...value];
  });

  return answer;
}
