//프로그래머스 폰켓몬
function solution(nums) {
  var answer = 0;

  const numSet = new Set(nums);
  const uniqueNumArr = [...numSet];

  const selectNum = nums.length / 2;
  if (uniqueNumArr.length > selectNum) answer = selectNum;
  else answer = uniqueNumArr.length;
  return answer;
}

const init = () => {
  console.log(solution([3, 1, 2, 3]));
};

init();
