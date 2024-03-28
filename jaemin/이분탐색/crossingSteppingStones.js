//프로그래머스 징검다리 건너기
function solution(stones, k) {
  let left = 0;
  let right = 200000000;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let possible = true; //mid명이 징검다리를 지날 수 있는지 flag
    let count = 0; //연속된 0 징검다리
    for (let i = 0; i < stones.length; i++) {
      const num = stones[i];
      if (num - mid <= 0) count += 1;
      else count = 0;
      if (count >= k) {
        possible = false;
        break;
      }
    }

    if (possible) {
      //mid명이 다리를 건널 수 있는 경우
      left = mid + 1;
    } else {
      //mid명이 다리를 건널 수 없는 경우
      right = mid - 1;
    }
  }

  return left;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
