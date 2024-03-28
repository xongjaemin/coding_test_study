//프로그래머스 요격 시스템
function solution(targets) {
  var answer = 1;

  //폭격 미사일 e기준 오름차순 정렬
  targets.sort((a, b) => a[1] - b[1]);
  //(첫번째 폭격 미사일 e - 0.1)에 첫번째 요격 미사일 설치
  let currentMissile = targets[0][1] - 0.1;

  //반복문을 돌면서 현재 (인덱스 폭격 미사일 s)가 마지막 요격 미사일 위치보다 크다면
  //(현재 인덱스 폭격 미사일 e - 0.1)에 카메라를 설치한다.
  for (let i = 1; i < targets.length; i++) {
    if (targets[i][0] > currentMissile) {
      currentMissile = targets[i][1] - 0.1;
      answer += 1;
    }
  }

  return answer;
}

console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
);
