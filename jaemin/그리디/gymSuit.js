//프로그래머스 체육복
function solution(n, lost, reserve) {
  var answer = n - lost.length;

  lost.sort((a, b) => a - b);

  const checked = [];
  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i])) {
      reserve.splice(reserve.indexOf(lost[i]), 1);
      checked.push(lost[i]);
      answer += 1;
    }
  }

  for (let i = 0; i < lost.length; i++) {
    if (checked.includes(lost[i])) continue;
    if (reserve.includes(lost[i] - 1)) {
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      answer += 1;
    } else if (reserve.includes(lost[i] + 1)) {
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      answer += 1;
    }
  }

  return answer;
}

const init = () => {
  console.log(solution(5, [4, 2], [3, 5]));
};

init();
