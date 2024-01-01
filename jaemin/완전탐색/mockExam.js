//프로그래머스 모의고사
const findMax = (counter) => {
  let max = counter[0];
  let maxIdx = [1];

  if (counter[0] === 0 && counter[1] === 0 && counter[2] === 0) {
    return [];
  }

  for (let i = 1; i < counter.length; i++) {
    if (counter[i] > max) {
      max = counter[i];
      maxIdx = [i + 1];
    } else if (counter[i] === max) {
      maxIdx.push(i + 1);
    }
  }

  return maxIdx;
};

function solution(answers) {
  var answer = [];
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let counter = [0, 0, 0];

  answers.forEach((element, i) => {
    //1번 수포자가 맞았는지 확인
    if (arr1[i % arr1.length] === element) counter[0]++;

    //2번 수포자가 맞았는지 확인
    if (arr2[i % arr2.length] === element) counter[1]++;

    //3번 수포자가 맞았는지 확인
    if (arr3[i % arr3.length] === element) counter[2]++;
  });

  answer = findMax(counter);

  return answer;
}

const init = () => {
  console.log(solution([1, 3, 2, 4, 2]));
};

init();
