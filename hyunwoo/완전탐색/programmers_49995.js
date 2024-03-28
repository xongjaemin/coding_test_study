function solution(cookie) {
  let result = 0;
  let summary = [0]; // [없음, 1번째, 1번째 + 2번째, 1번째 + 2번째 + 3번째, ...]

  let sum = 0;
  cookie.forEach((count) => {
    sum += count;
    summary.push(sum);
  });

  for (let m = 0; m < summary.length; m++) {
    let left = summary[m];
    for (let r = m + 1; r < summary.length; r++) {
      let son2 = summary[r] - left;
      if (left < result || son2 < result) continue;

      for (let l = 0; l < m; l++) {
        let son1 = left - summary[l];
        if (son1 < son2) break;
        else if (son1 === son2) {
          result = Math.max(result, son1);
          break;
        }
      }
    }
  }

  return result;
}
