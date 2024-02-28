function solution(targets) {
  let answer = 0;

  targets.sort((a, b) => a[1] - b[1]); // 미사일 거리 end를 기준으로 오름차순 정렬
  let range_max = -1; // 첫번째 요격 미사일 end 거리 초기화

  targets.forEach((value, index) => {
    if (index == 0) {
      answer += 1;
      range_max = value[1];
    }
    // 요격 미사일 end거리 안에 있다면 return
    else if (value[0] < range_max && range_max <= value[1]) {
      return;
    }
    // 아닐 경우 end 거리를 업데이트하고 요격 미사일 추가
    else {
      answer += 1;
      range_max = value[1];
    }
  });

  return answer;
}
