// problems = [alp_req, cop_req, alp_rwd, cop_rwd, cost]의 형태
function solution(alp, cop, problems) {
  // 필요한 최대 알고력과, 코딩력을 저장할 변수
  let [maxAlp, maxCop] = [alp, cop];
  for (const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
    maxAlp = maxAlp < alp_req ? alp_req : maxAlp;
    maxCop = maxCop < cop_req ? cop_req : maxCop;
  }
  // 특정 알고력과 코딩력을 만족하기 위해 걸리는 최소 시간 저장을 위한 배열
  let powerTable = new Array(maxAlp + 1)
    .fill(null)
    .map(() => new Array(maxCop + 1).fill(Infinity));
  powerTable[alp][cop] = 0;

  for (let a = alp; a <= maxAlp; a++) {
    for (let c = cop; c <= maxCop; c++) {
      // 기존값, 알고력 공부했을 때, 코딩력 공부했을 때 cost를 비교
      if (a + 1 <= maxAlp)
        powerTable[a + 1][c] = Math.min(
          powerTable[a][c] + 1,
          powerTable[a + 1][c]
        );
      if (c + 1 <= maxCop)
        powerTable[a][c + 1] = Math.min(
          powerTable[a][c] + 1,
          powerTable[a][c + 1]
        );

      // 현재 위치에서 문제를 풀었을 때, 얻을 수 있는 코딩력과 알고력의 cost
      for (let tmp = 0; tmp < problems.length; tmp++) {
        const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[tmp];
        if (alp_req <= a && cop_req <= c) {
          const targetAlp = a + alp_rwd >= maxAlp ? maxAlp : a + alp_rwd;
          const targetCop = c + cop_rwd >= maxCop ? maxCop : c + cop_rwd;
          powerTable[targetAlp][targetCop] = Math.min(
            powerTable[targetAlp][targetCop],
            powerTable[a][c] + cost
          );
        }
      }
    }
  }
  return powerTable[maxAlp][maxCop];
}

const alp = 10;
const cop = 10;
const problems = [
  [10, 15, 2, 1, 2],
  [20, 20, 3, 3, 4],
];
console.log(solution(alp, cop, problems));
