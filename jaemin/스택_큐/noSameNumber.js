//프로그래머스 같은 숫자는 싫어
function solution(arr) {
  var answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) answer.push(arr[i]);
  }

  return answer;
}

const init = () => {
  console.log(solution([1, 1, 3, 3, 0, 1, 1]));
};

init();
