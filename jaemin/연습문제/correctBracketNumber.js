//프로그래머스 올바른 괄호의 갯수
function solution(n) {
  let answer = 0;
  //여는 괄호의 개수, 닫는 괄호의 개수, 총 개수
  const dfs = (open, close, count) => {
    if (open > n || close > n || open < close) {
      //올바르지 않은 경우들 가지치기
      return;
    }

    if (n * 2 === count) answer += 1;

    dfs(open + 1, close, count + 1); // '(' 추가
    dfs(open, close + 1, count + 1); // ')' 추가
  };

  dfs(0, 0, 0);

  return answer;
}

console.log(solution(4));
