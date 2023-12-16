//프로그래머스 의상
function solution(clothes) {
  var answer = 1;

  let dict = {};

  clothes.map((a, i) => {
    if (!dict[a[1]]) dict[a[1]] = 1;
    else dict[a[1]] += 1;
  });

  for (const value of Object.values(dict)) {
    answer *= value + 1; //착용하지 않는 경우 + 1
  }
  answer -= 1; //모두 착용하지 않는 경우 - 1

  return answer;
}

const init = () => {
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ]);
};

init();
