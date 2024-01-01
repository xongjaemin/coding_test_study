//프로그래머스 프로세스
function solution(priorities, location) {
  var answer = 0;
  let count = 0;

  const prioritiesObj = priorities.map((el, i) => ({
    idx: i,
    val: el,
    priority: -1,
  }));

  const resultArr = [];

  while (prioritiesObj.length > 0) {
    let isExecuted = true;
    let temp = prioritiesObj.shift();
    let tempArr = prioritiesObj.map((priority) => priority.val);
    let maxVal = Math.max(...tempArr);

    if (temp.val < maxVal) {
      prioritiesObj.push(temp);
      isExecuted = false;
    }

    if (isExecuted) {
      count += 1;
      temp.priority = count;
      resultArr.push(temp);
    }
  }

  answer = resultArr.find((el) => el.idx === location).priority;

  return answer;
}

const init = () => {
  console.log(solution([2, 1, 3, 2], 2));
};

init();
