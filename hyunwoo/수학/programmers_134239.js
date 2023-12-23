function solution(k, ranges) {
  let accumulate = [0.0]; // 누적 넓이 리스트
  let recentY = k; // 이전 y값
  let recentArea = 0; // 누적 넓이

  // 우박 수열
  while (recentY != 1.0) {
    let tmpY = recentY % 2 == 0 ? recentY / 2 : recentY * 3 + 1;
    recentArea += (recentY + tmpY) / 2;
    recentY = tmpY;
    accumulate.push(recentArea);
  }

  let n = accumulate.length - 1;
  return ranges.map((v) => {
    let [start, end] = v;
    end = end === 0 ? n : n + end;

    if (start > end) {
      // 올바르지 않는 구간일 때
      return -1.0;
    } else {
      // 올바른 구간일 때
      return accumulate[end] - accumulate[start];
    }
  });
}
