//프로그래머스 순위
function solution(n, results) {
  var answer = 0;

  const array = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < results.length; i++) {
    //배열 initial value
    const [win, lose] = results[i];
    array[win - 1][lose - 1] = 1;
  }

  for (let i = 0; i < n; i++) {
    //거치는 선수
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (array[j][i] === 1 && array[i][k] === 1) {
          array[j][k] = 1;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    //i번째 선수의 순위를 정확하게 매길 수 있는지 확인
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (array[i][j] === 1) count += 1;
      if (array[j][i] === 1) count += 1;
    }

    if (count >= n - 1) answer += 1;
  }

  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
);
