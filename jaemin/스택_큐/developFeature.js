//프로그래머스 기능 개발
function solution(progresses, speeds) {
  var answer = [];
  let remainArr = [];
  for (let i = 0; i < progresses.length; i++) {
    if ((100 - progresses[i]) % speeds[i] === 0) {
      remainArr.push((100 - progresses[i]) / speeds[i]);
    } else {
      remainArr.push(Math.floor((100 - progresses[i]) / speeds[i]) + 1);
    }
  }

  let count = 0;
  let deployDay = remainArr[0];

  remainArr.map((remain, i) => {
    if (remain <= deployDay) count++;
    else {
      deployDay = remain;
      answer.push(count);
      count = 1;
    }
  });
  answer.push(count);
  return answer;
}

const init = () => {
  console.log(solution([93, 30, 55], [1, 30, 5]));
};

init();
