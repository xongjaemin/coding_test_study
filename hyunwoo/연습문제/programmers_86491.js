function solution(sizes) {
  let largeX = 0;
  let largeY = 0;
  sizes.forEach((data) => {
    let x = data[0] < data[1] ? data[0] : data[1];
    let y = data[0] < data[1] ? data[1] : data[0];
    largeX = x < largeX ? largeX : x;
    largeY = y < largeY ? largeY : y;
  });

  return largeX * largeY;
}
