function solution(stones, k) {
  // 최대 200,000,000 명이 건널 수 있기 때문에
  // 건널 수 있는 사람의 수를 변경해가면서 징검다리에 대입해가며 찾아야함.
  // end를 출력하는 이유는 while문을 탈출했을 경우
  // end가 start보다 작기 때문

  let start = 1;
  let end = 200000000;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let skip = 0;

    for (let stone of stones) {
      if (stone < mid) skip++;
      else skip = 0;
      if (skip >= k) break;
    }

    if (skip >= k) end = mid - 1;
    else start = mid + 1;
  }

  return end;
}
