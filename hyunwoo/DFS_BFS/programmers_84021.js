const findBlocks = (graph, findMark, skipMark) => {
  let blocks = [];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, -1, 1];
  const length = graph.length;

  for (let row = 0; row < length; row++) {
    for (let col = 0; col < length; col++) {
      // 블럭 마크가 아니면 넘김
      if (graph[row][col] === skipMark) continue;

      // BFS를 이용해서 블럭 형태 좌표 탐색
      let block = [[row, col]]; // 블럭 좌표
      let queue = [[row, col]];
      let top = row;
      let left = col;
      graph[row][col] = skipMark;

      while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (
            0 <= nx &&
            nx < length &&
            0 <= ny &&
            ny < length &&
            graph[nx][ny] === findMark
          ) {
            queue.push([nx, ny]);
            block.push([nx, ny]);
            graph[nx][ny] = skipMark;
            top = top < nx ? top : nx;
            left = left < ny ? left : ny;
          }
        }
      }

      if (block.length > 0) {
        // 블럭 좌표 기준점 통일화
        block = block.map((data) => {
          const [x, y] = data;
          return [x - top, y - left];
        });
        blocks.push(block.sort());
      }
    }
  }

  // 좌표 순서 정렬
  return blocks.sort((a, b) => {
    if (a.length !== b.length) return b.length - a.length;
  });
};

const rotate = (block) => {
  let max = Math.max(...block.map((data) => Math.max(data[0], data[1])));
  let top = 50;
  let left = 50;

  // 90도 회전
  let roateBlock = block.map((coor) => {
    const [x, y] = coor;
    top = top < -y + max ? top : -y + max;
    left = left < x ? left : x;
    return [-y + max, x];
  });

  // 회전된 블럭 좌표 기준점 통일화 + 정렬
  return roateBlock
    .map((coor) => {
      const [x, y] = coor;
      return [x - top, y - left];
    })
    .sort();
};

function solution(game_board, table) {
  let answer = 0;

  const BoardBlanks = findBlocks(game_board, 0, 1);
  const tableBlocks = findBlocks(table, 1, 0);

  // 큰 빈칸부터 큰 블럭을 넣어가면서 확인
  BoardBlanks.forEach((blanck) => {
    for (let i = 0; i < tableBlocks.length; i++) {
      let isMatch = false;
      let rotateBlock = tableBlocks[i];
      for (let j = 0; j < 4; j++) {
        rotateBlock = rotate(rotateBlock);

        if (JSON.stringify(blanck) === JSON.stringify(rotateBlock)) {
          answer += blanck.length;
          tableBlocks.splice(i, 1);
          isMatch = true;
          break;
        }
      }
      if (isMatch) break;
    }
  });
  return answer;
}
