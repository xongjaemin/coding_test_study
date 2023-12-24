function solution(n) {
  let answer = 0;

  // 해당 row의 column에 퀸을 놓을 수 있는지 확인
  const valid = (row, column, depthColumn) => {
    //depthColumn은 각 row(index)별 column의 위치를 저장한 배열
    if (depthColumn.includes(column)) return false; // 수직
    for (let i = 0; i < row; i++) {
      const saveRow = i;
      const saveColumn = depthColumn[i];
      // 대각선인 경우 -> 기울기가 1일 때
      if (Math.abs(row - saveRow) === Math.abs(column - saveColumn))
        return false;
    }
    // 해당 row의 column에 퀸을 놓을 수 있다는 것을 저장
    depthColumn[row] = column;
    return true;
  };

  // 해당 row의 모든 column에 퀸을 놓아보는 함수
  const dfs = (currentRow, depthColumn) => {
    for (let i = 0; i < n; i++) {
      // 마지막 row 일 때, 퀸을 놓을 수 있을 경우 answer 증가
      if (currentRow === n - 1 && valid(currentRow, i, depthColumn)) answer++;
      // 마지막 row가 아닌 row에서 퀸을 놓음
      else if (valid(currentRow, i, depthColumn))
        dfs(currentRow + 1, [...depthColumn]);
    }
  };

  dfs(
    0,
    Array.from({ length: n }, (x) => -1)
  );

  return answer;
}
console.log(solution(4));
