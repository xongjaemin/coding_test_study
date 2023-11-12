//프로그래머스 타겟 넘버
function solution(numbers, target) {
  var answer = 0;

  const dfs = (index, sum) => {
    if (index === numbers.length) {
      if (sum === target) answer += 1;
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  };
  dfs(0, 0);

  return answer;
}

const init = () => {
  console.log(solution([1, 1, 1, 1, 1], 3));
};

init();
