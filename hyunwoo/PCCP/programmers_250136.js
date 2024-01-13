function solution(land) {
  let max = 0;
  const n = land.length;
  const m = land[0].length;

  let oil_key = 1; // 오일 넘버링 (키)
  let visited = Array.from({ length: n }, () => new Array(m).fill(0));
  let oilMap = new Map(); // 오일 집합 넘버와 양 저장

  const bfs = (start_x, start_y) => {
    let oil = 0; // 현재 위치에서 시추 오일 양
    let queue = [[start_x, start_y]];
    visited[start_x][start_y] = oil_key;

    // 상하좌우
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    while (queue.length > 0) {
      let coordinate = queue.shift();
      let x = coordinate[0];
      let y = coordinate[1];
      oil += land[x][y] === 1 ? 1 : 0;

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        // 범위를 넘어서거나, 이미 방문한 위치일 때
        if (nx < 0 || n <= nx || ny < 0 || m <= ny || visited[nx][ny] !== 0)
          continue;

        // 그렇지않고, 새로운 석유일 경우
        if (land[nx][ny] === 1) {
          visited[nx][ny] = oil_key;
          queue.push([nx, ny]);
        }
      }
    }

    // 오일 덩어리 정보 저장
    oilMap[oil_key++] = oil;
    return;
  };

  // land의 석유 덩어리 정보 생성
  land.forEach((values, i) => {
    values.forEach((value, j) => {
      if (visited[i][j] === 0 && land[i][j] > 0) bfs(i, j);
    });
  });

  // 시추관 위치에 따른 최대 시추량 탐색
  for (let i = 0; i < m; i++) {
    let sum = 0;
    let line_oil_key = new Set();

    // 시추관이 지나가는 오일 덩어리 키값 추가
    for (let j = 0; j < n; j++) {
      if (visited[j][i] !== 0) line_oil_key.add(visited[j][i]);
    }

    // 오일 덩이리의 양 합산
    line_oil_key.forEach((value) => {
      sum += oilMap[value];
    });

    max = max < sum ? sum : max;
  }

  return max;
}
