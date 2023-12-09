//프로그래머스 큰 수 만들기
function solution(number, k) {
  var answer = "";
  let ansArr = [];

  for (let i = 0; i < number.length; i++) {
    const num = number[i];
    while (k > 0 && ansArr[ansArr.length - 1] < num) {
      ansArr.pop();
      k--;
    }

    ansArr.push(num);
  }

  if (number.length === ansArr.length) {
    ansArr = ansArr.slice(0, number.length - k);
  }

  answer = ansArr.join("");

  return answer;
}

const init = () => {
  console.log(solution("4321", 1));
  //   console.log(solution("6547", 3));
};

init();
