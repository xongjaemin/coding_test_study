function solution(n, times) {
  times = times.sort((a, b) => a - b); // 오름차순 정렬
  let min = 1;
  let max = n * times[times.length - 1];
  let answer = max;

  // 이분탐색으로 걸리는 시간을 찾는다.
  while (min <= max) {
    let canAudit = 0;
    let mid = Math.floor((min + max) / 2);

    // 주어진 시간(mid) 동안 심사관이 심사할 수 있는 사람 수 계산
    times.forEach((value) => {
      canAudit += Math.floor(mid / value);
      if (canAudit >= n) answer = mid < answer ? mid : answer;
    });

    // 모든 심사관들이 심사할 수 있는 사람 수와 목표 사람 수 비교
    if (canAudit < n) min = mid + 1;
    else if (canAudit >= n) max = mid - 1;
  }

  return answer;
}
