// //프로그래머스 아이템 줍기
function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;

  const matrix = Array.from(Array(120), () => Array(120).fill(0));

  const doubledRectangle = rectangle.map((el) => el.map((point) => point * 2));

  //matrix 테두리는 1로, 내부는 2로
  for (let i = 0; i < doubledRectangle.length; i++) {
    const [startX, startY, endX, endY] = doubledRectangle[i];

    for (let j = startY; j <= endY; j++) {
      for (let k = startX; k <= endX; k++) {
        if (j === startY || j === endY || k === startX || k === endX) {
          if (matrix[j][k] === 0) matrix[j][k] = 1;
        } else matrix[j][k] = 2;
      }
    }
  }

  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;

  //BFS 최소거리 탐색
  const queue = [[characterY, characterX, 0]]; //y, x, count
  matrix[characterY][characterX] = 0;
  const dy = [1, -1, 0, 0]; //y축 이동
  const dx = [0, 0, 1, -1]; //x축 이동

  while (queue.length > 0) {
    const [currentY, currentX, count] = queue.shift();

    if (currentY === itemY && currentX === itemX) {
      return count / 2;
    }

    for (let i = 0; i < 4; i++) {
      const ny = currentY + dy[i];
      const nx = currentX + dx[i];
      if (matrix[ny][nx] === 1) {
        queue.push([ny, nx, count + 1]);
        matrix[ny][nx] = 0;
      }
    }
  }

  return answer;
}

const init = () => {
  console.log(
    solution(
      [
        [1, 1, 7, 4],
        [3, 2, 5, 5],
        [4, 3, 6, 9],
        [2, 6, 8, 8],
      ],
      1,
      3,
      7,
      8
    )
  );
};

init();
