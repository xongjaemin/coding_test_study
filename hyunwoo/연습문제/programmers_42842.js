function solution(brown, yellow) {
  let answer = [];
  let w_h = brown / 2 - 2;

  for (let height = 1; height < w_h; height++) {
    let width = w_h - height;
    if (width * height == yellow) {
      answer.push(width + 2);
      answer.push(height + 2);
      break;
    }
  }
  return answer;
}
