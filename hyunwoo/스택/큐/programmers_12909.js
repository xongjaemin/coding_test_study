// 해당 코드는 효율성 테스트 통과
function solution(s) {
  let arr = s.split("").filter(Boolean);
  let blance = 0; // ( 개수 증가는 +, ) 개수 증가는 -

  // arr 배열 한번 순회
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(") blance++;
    else blance--;
    if (blance < 0) return false;
  }

  return blance === 0;
}

// 이건 효율성 테스트에서 시간초과
function solution(s) {
  let arr = s.split("").filter(Boolean);
  let blance = 0; // ( 개수 증가는 +, ) 개수 증가는 -

  // arr 배열 한번 순회
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(") blance++;
    else blance--;
    if (blance < 0) return false;
  }

  return blance == 0;
}
