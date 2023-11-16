const calculate = (setX, setY) => {
  let calculateSet = [];

  for (let x of setX.values()) {
    for (let y of setY.values()) {
      calculateSet.push(x + y); // 덧셈
      calculateSet.push(x - y); // 뺄셈
      calculateSet.push(x * y); // 곱셈
      calculateSet.push(x / y); // 나눗셈
    }
  }

  return calculateSet;
};

function solution(N, number) {
  let answer = -1;

  let summary = {}; // n번 사용해서 나온 숫자들의 집합
  summary[1] = new Set([N]); // 1번 사용해서 나올 수 있는 숫자 집합

  if (number == N) return 1;

  for (let n = 2; n <= 8; n++) {
    let i = 1;
    let tmpSet = new Set([Number(`${N}`.repeat(n))]); // n번 사용해서 나올 수 있는 숫자 집합

    while (i < n) {
      calculate(summary[i], summary[n - i]).forEach((value) => {
        tmpSet.add(value);
      });
      i += 1;
    }

    if (tmpSet.has(number)) return n;
    else summary[n] = tmpSet;
  }

  return answer;
}
