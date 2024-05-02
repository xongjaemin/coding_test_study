//프로그래머스 예상 대진표
function solution(n, a, b) {
  const arr = new Array(n).fill(0);
  const arr2 = arr.map((a, i) => {
    return i + 1;
  });
  const totalRound = Math.log2(n);
  let answer = totalRound;

  for (let i = totalRound - 1; i >= 0; i--) {
    const groupLength = 2 ** (i + 1);
    const groupNum = n / groupLength;

    for (let j = 0; j < groupNum; j++) {
      const group = arr2.slice(j * groupLength, j * groupLength + groupLength);
      if (group.includes(a) && group.includes(b)) {
        answer = i + 1;
      }
    }
  }

  return answer;
}

console.log(solution(8, 4, 7));
