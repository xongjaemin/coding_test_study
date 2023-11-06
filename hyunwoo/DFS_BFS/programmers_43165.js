let answer = 0;
let length = 0;

const dfs = (sum, numbers, target, nextNode) => {
  if (length <= nextNode) {
    if (sum == target) return answer++;
  } else {
    dfs(sum + numbers[nextNode], numbers, target, nextNode + 1);
    dfs(sum - numbers[nextNode], numbers, target, nextNode + 1);
  }
};

function solution(numbers, target) {
  length = numbers.length;

  dfs(-numbers[0], numbers, target, 1);
  dfs(+numbers[0], numbers, target, 1);

  return answer;
}
