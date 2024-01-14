//pccp 기출문제 2번 석유 시추
function solution(land) {
  let queue = [[0, 0]]; //bfs 큐 (y, x)
  const dx = [-1, 1, 0, 0]; //좌우 이동
  const dy = [0, 0, -1, 1]; //상하 이동
  const n = land.length; //y 길이
  const m = land[0].length; //x 길이
  let oilMap = new Map(); //{석유덩어리의 석유량 : 석유덩어리를 얻을 수 있는 열의 index들}

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let indexSet = new Set(); //석유덩어리를 얻을 수 있는 열의 Index set
      let tempCount = 0; //석유덩어리의 석유량을 저장해줄 변수
      if (land[j][i] === 1) {
        queue = [[j, i]];
        while (queue.length > 0) {
          let [y, x] = queue.shift();
          if (land[y][x] === 1) {
            land[y][x] = 0;
            tempCount++;
            if (!indexSet.has(x)) indexSet.add(x);

            for (let k = 0; k < 4; k++) {
              let ny = y + dy[k];
              let nx = x + dx[k];

              if (
                nx >= 0 &&
                ny >= 0 &&
                nx < m &&
                ny < n &&
                land[ny][nx] === 1
              ) {
                queue.push([ny, nx]);
              }
            }
          }
        }
      }
      if (tempCount !== 0) {
        for (let idx of indexSet) {
          oilMap.set(
            idx,
            oilMap.has(idx) ? oilMap.get(idx) + tempCount : tempCount
          );
        }
      }
    }
  }

  const answer = Math.max(...oilMap.values());
  console.log(answer);
  return answer;
}

const init = () => {
  solution([
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [1, 0, 0, 1, 0],
    [1, 1, 0, 1, 0],
  ]);
};

init();
