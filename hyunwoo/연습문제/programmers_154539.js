function solution(numbers) {
  let length = numbers.length;
  let answer = new Array(length).fill(-1);
  let stack = []; // 뒤에 있는 큰 수에 대한 값들

  for (let i = length - 2; i >= 0; i--) {
    if (numbers[i] < numbers[i + 1]) {
      answer[i] = numbers[i + 1];
      stack.unshift(numbers[i + 1]); // 바로 다음 값이 현재 값보다 클 경우
    }

    // stack에 있는 값들을 모두 비교
    while (stack.length != 0) {
      // 현재의 위치보다 뒤에 위치한 수들 중 가장 가까운 큰 수 였던 것
      let tmpMax = stack.shift();
      if (numbers[i] < tmpMax) {
        answer[i] = tmpMax;
        stack.unshift(tmpMax); // 조건을 만족하면 stack에 맨 앞에 추가
        break; // stack 값 비교를 멈춤
      }
    }
  }

  return answer;
}
