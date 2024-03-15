function solution(n) {
  let countList = Array.from({ length: n + 1 }, () => 0);
  countList[0] = 1; // 괄호 0개의 경우의 수 1개
  countList[1] = 1; //  괄호 1개의 경우의 수 1개

  for (let i = 2; i <= n; i++) {
    // 괄호 i개 경우의 수 = 괄호 0개 * 괄호 i - 1개 + 괄호 1개 * 괄호 i - 2개 ... + 괄호 i - 1개 * 괄호 0개
    for (let j = 0; j < i; j++) {
      countList[i] += countList[j] * countList[i - j - 1];
    }
  }

  return countList[n];
}
