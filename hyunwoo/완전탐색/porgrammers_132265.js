function solution(topping) {
  var answer = 0;
  let backTopping = new Map();

  // 토핑 개수 파악
  topping.forEach((v) => {
    backTopping.set(v, (backTopping.get(v) || 0) + 1);
  });

  // 자를때 앞부분 토핑 정보 저장
  let frontTopping = new Map();
  topping.forEach((v) => {
    frontTopping.set(v, (frontTopping.get(v) || 0) + 1);

    backTopping.set(v, backTopping.get(v) - 1);

    // 뒷부분에 특정 토핑의 개수가 0이면 해당 토핑 삭제
    if (backTopping.get(v) === 0) backTopping.delete(v);

    // 만약 토핑 종류 개수가 같다면 answer 추가
    if (frontTopping.size == backTopping.size) answer++;
  });

  return answer;
}
