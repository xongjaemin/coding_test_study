function solution(x, y, n) {
  let answer = -1;
  const queue = [{ num: y, count: 0 }];
  const dp = new Map();

  while (queue.length !== 0) {
    const { num, count } = queue.shift();

    // 현재 숫자가 목표값 x와 같은지 확인
    if (num === x) {
      answer = count;
      break;
    }

    // 현재 숫자에서 'n'을 뺄셈하는 것이 유효한 작업인지 확인
    if (num - n >= x) {
      if (dp.get(num - n) === undefined || dp.get(num - n) > count + 1) {
        queue.push({ num: num - n, count: count + 1 });
        dp.set(num - n, count + 1);
      }
    }

    // 현재 숫자를 2로 나누는 것이 유효한 작업인지 확인
    if (num % 2 === 0) {
      if (dp.get(num / 2) === undefined || dp.get(num / 2) > count + 1) {
        queue.push({ num: num / 2, count: count + 1 });
        dp.set(num / 2, count + 1);
      }
    }

    // 현재 숫자를 3으로 나누는 것이 유효한 작업인지 확인
    if (num % 3 === 0) {
      if (dp.get(num / 3) === undefined || dp.get(num / 3) > count + 1) {
        queue.push({ num: num / 3, count: count + 1 });
        dp.set(num / 3, count + 1);
      }
    }
  }

  return answer;
}
