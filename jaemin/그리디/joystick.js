//프로그래머스 조이스틱

//세로 조작 횟수 구하기
const getVerticalNum = (char) => {
  if (char <= "M") {
    //아래로 조작
    return char.charCodeAt() - 65;
  } else {
    //위로 조작
    return 91 - char.charCodeAt();
  }
};

function solution(name) {
  var answer = 0;

  let horizontalNum = name.length - 1; //가로 조작 횟수
  while (name[horizontalNum] === "A" && horizontalNum > 0) {
    horizontalNum -= 1;
  }

  for (let i = 0; i < name.length; i++) {
    answer += getVerticalNum(name[i]);

    let next = i + 1;
    while (next < name.length && name[next] === "A") {
      next += 1;
    }

    //우로 쭉 가는 것과, 좌로 반대로 돌아서 가는 것 중 조작횟수가 적은 경우 찾기
    horizontalNum = Math.min(horizontalNum, 2 * i + (name.length - next));
    horizontalNum = Math.min(horizontalNum, 2 * (name.length - next) + i);
  }
  answer += horizontalNum;

  return answer;
}

const init = () => {
  console.log(solution("JAN"));
};

init();
