//프로그래머스 N으로 표현
function solution(N, number) {
  var answer = -1;

  if (number === N) return 1;

  let set = [];
  set.push(new Set());
  set[0].add(N);

  for (let i = 1; i < 8; i++) {
    set.push(new Set());
    set[i].add(Number(`${N}`.repeat(i + 1)));
    for (let j = 0; j < i; j++) {
      for (const arg1 of set[j]) {
        for (const arg2 of set[i - j - 1]) {
          set[i].add(arg1 + arg2);
          set[i].add(arg1 - arg2);
          set[i].add(arg1 * arg2);
          set[i].add(Math.floor(arg1 / arg2));
        }
      }
    }

    if (set[i].has(number)) return i + 1;
  }

  return answer;
}

const init = () => {
  console.log(solution(2, 11));
};

init();
