function solution(rectangle, characterX, characterY, itemX, itemY) {
  let graph = Array.from({ length: 102 }, () =>
    Array.from({ length: 101 }, () => 0)
  );

  // 그래프 업데이트
  for (let rect of rectangle) {
    const [x1, y1, x2, y2] = rect;
    for (let i = x1 * 2; i <= x2 * 2; i++) {
      for (let j = y1 * 2; j <= y2 * 2; j++) {
        if (j === y1 * 2 || j === y2 * 2 || i === x1 * 2 || i === x2 * 2) {
          if (graph[j][i] === 0) graph[j][i] = 1;
        } else graph[j][i] = 2;
      }
    }
  }

  // BFS로 최단 경로 찾기 (도착시 return)
  graph[characterY * 2][characterX * 2] = -1;
  const queue = [{ x: characterX * 2, y: characterY * 2, count: 0 }];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, -1, 1];
  while (queue.length > 0) {
    const { x, y, count } = queue.shift();
    if (x === itemX * 2 && y === itemY * 2) return count / 2;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (graph[ny][nx] === 1) {
        graph[ny][nx] = -1;
        queue.push({ x: nx, y: ny, count: count + 1 });
      }
    }
  }

  return 0;
}
