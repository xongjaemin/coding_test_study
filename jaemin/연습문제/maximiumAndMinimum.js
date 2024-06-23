//프로그래머스 최댓값과 최솟값
function solution(s) {
  var answer = "";

  const arr = s.split(" ").map((a) => {
    return parseInt(a);
  });

  answer = `${Math.min(...arr)} ${Math.max(...arr)}`;

  return answer;
}

console.log(solution("1 2 3 4"));
