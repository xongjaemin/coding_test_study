//프로그래머스 모음 사전
function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  let answer = 0;
  let count = 0;

  const dfs = (str) => {
    if (str.length > 5) return;

    if (str === word) {
      answer = count;
      return;
    }

    count += 1;

    for (let i = 0; i < vowels.length; i++) {
      dfs(str + vowels[i]);
    }
  };

  dfs("");

  return answer;
}

const init = () => {
  console.log(solution("AAAE"));
};

init();
