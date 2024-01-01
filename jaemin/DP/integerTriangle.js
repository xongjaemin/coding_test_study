//프로그래머스 정수 삼각형
function solution(triangle) {
  var answer = 0;
  const memoization = triangle.map((el) => [...el]); //메모이제이션을 위한 깊은 복사본

  for (let i = 0; i < triangle.length - 1; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const leftChild = memoization[i][j] + triangle[i + 1][j]; //자신 + 왼쪽 자식의 합
      if (memoization[i + 1][j] < leftChild) memoization[i + 1][j] = leftChild;
      const rightChild = memoization[i][j] + triangle[i + 1][j + 1]; //자신 + 오른쪽 자식의 합
      if (memoization[i + 1][j + 1] < rightChild)
        memoization[i + 1][j + 1] = rightChild;
    }
  }
  answer = Math.max(...memoization[memoization.length - 1]);

  return answer;
}

const init = () => {
  solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
};

init();
