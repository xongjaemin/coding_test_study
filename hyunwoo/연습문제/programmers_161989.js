function solution(n, m, section) {
  let answer = 0;
  let paintStart = section[0];

  section.forEach((value, index) => {
    // 벽에 페인트를 칠 할 수 있다면 횟수 추가
    if (index == 0) {
      answer++;
      return;
    }
    // 시작점에서 롤러의 길이 만큼 범위 안에 있을 경우
    else if (value < paintStart + m) {
      return;
    }
    //롤러의 시작점 최신화
    else {
      paintStart = value;
      answer++;
    }
  });

  return answer;
}
