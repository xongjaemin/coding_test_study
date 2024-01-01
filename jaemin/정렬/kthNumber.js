//프로그래머스 k번째수
const getAnswer = (array, command) => {
  const slicedArray = array.slice(command[0] - 1, command[1]);
  slicedArray.sort((a, b) => {
    return a - b;
  });

  return slicedArray[command[2] - 1];
};

function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    answer.push(getAnswer(array, commands[i]));
  }
  return answer;
}

const init = () => {
  console.log(
    solution(
      [1, 5, 2, 6, 3, 7, 4],
      [
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3],
      ]
    )
  );
};

init();
