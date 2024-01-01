function solution(n, m, section) {
  //프로그래머스 덧칠하기
  var answer = 0;

  for (let i = 1; i < n + 1; i++) {
    if (section.includes(i)) {
      answer++;
      i = i + m - 1;
    }
  }

  return answer;
}

const init = () => {
  console.log(solution(4, 1, [1, 2, 3, 4]));
};

init();
