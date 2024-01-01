//프로그래머스 키패드 누르기
const getNumberLocation = (number) => {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (keypad[i][j] === number) return [i, j];
    }
  }
};

function solution(numbers, hand) {
  var answer = [];

  const leftNum = [1, 4, 7];
  const rightNum = [3, 6, 9];
  const midNum = [2, 5, 8, 0];
  let leftCurrent = "*";
  let rightCurrent = "#";

  const addLeft = (number) => {
    answer.push("L");
    leftCurrent = number;
  };
  const addRight = (number) => {
    answer.push("R");
    rightCurrent = number;
  };

  numbers.map((number, i) => {
    if (leftNum.includes(number)) {
      addLeft(number);
    } else if (rightNum.includes(number)) {
      addRight(number);
    } else if (midNum.includes(number)) {
      leftLocation = getNumberLocation(leftCurrent);
      rightLocation = getNumberLocation(rightCurrent);
      targetLocation = getNumberLocation(number);

      leftDistance =
        Math.abs(targetLocation[0] - leftLocation[0]) +
        Math.abs(targetLocation[1] - leftLocation[1]);

      rightDistance =
        Math.abs(targetLocation[0] - rightLocation[0]) +
        Math.abs(targetLocation[1] - rightLocation[1]);

      if (leftDistance < rightDistance) {
        addLeft(number);
      } else if (rightDistance < leftDistance) {
        addRight(number);
      } else {
        if (hand === "left") addLeft(number);
        else addRight(number);
      }
    }
    currentNum = number;
  });

  return answer.join("");
}

const init = () => {
  console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
};
init();
