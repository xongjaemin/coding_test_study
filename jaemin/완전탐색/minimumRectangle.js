//프로그래머스 최소직사각형
function solution(sizes) {
  var answer = 0;

  let width = 0;
  let height = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][1] < sizes[i][0]) {
      [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
    }

    if (sizes[i][0] > width) width = sizes[i][0];
    if (sizes[i][1] > height) height = sizes[i][1];
  }

  answer = width * height;

  return answer;
}

const init = () => {
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]);
};

init();
