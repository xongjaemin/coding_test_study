//프로그래머스 연속된 부분 수열의 합
function solution(sequence, k) {
  var answer = [0, 10000000];
  let length = sequence.length;
  let start = 0;
  let end = 0;
  let sum = sequence[0];

  while (end < length) {
    if (sum === k) {
      if (end - start < answer[1] - answer[0]) {
        answer = [start, end];
      }
    }

    if (sum >= k) {
      sum = sum - sequence[start];
      start += 1;
    } else {
      end += 1;
      sum = sum + sequence[end];
    }
  }

  return answer;
}

const init = () => {
  console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));
};

init();
