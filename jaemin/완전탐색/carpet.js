//프로그래머스 카펫
function solution(brown, yellow) {
  var answer = [];

  let totalNum = brown + yellow; //전체 면적

  //노란색 면적 === (가로-2) * (세로-2)

  for (let i = 1; i < totalNum; i++) {
    if (totalNum % i !== 0) continue;

    const height = i;
    const width = totalNum / height;

    if (yellow === (width - 2) * (height - 2)) {
      answer = [width, height];
      break;
    }
  }

  return answer;
}

const init = () => {
  console.log(solution(10, 2));
};

init();
