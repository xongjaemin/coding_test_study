function solution(numbers) {
  //프로그래머스 가장 큰 수
  var answer = "";
  answer = numbers
    .map((number) => number.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  if (answer[0] === "0") answer = 0;
  return answer;
}

const init = () => {
  console.log(solution([6, 10, 2]));
};

init();
