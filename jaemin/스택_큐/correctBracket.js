//프로그래머스 올바른 괄호
function solution(s) {
  let brackets = s.split("");
  let count = 0;

  if (brackets[0] === ")" || brackets[brackets.length - 1] === "(") {
    return false;
  }

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "(") count += 1;
    else count -= 1;

    if (count < 0) return false;
  }

  if (count === 0) return true;
  else return false;
}

const init = () => {
  console.log(solution("())((()))(()"));
};

init();
