//프로그래머스 단속카메라
function solution(routes) {
  var answer = 1;

  //진출 시점 기준 오름차순 정렬
  routes.sort((a, b) => a[1] - b[1]);

  let currentPoint = routes[0][1]; //마지막 카메라 위치

  for (let i = 1; i < routes.length; i++) {
    if (routes[i][0] > currentPoint) {
      //현재 차량의 진입 시점이 마지막 카메라 위치보다 크면 현재 차량의 진출 시점에 카메라 설치
      answer += 1;
      currentPoint = routes[i][1];
    }
  }

  return answer;
}

const init = () => {
  console.log(
    solution([
      [-20, 15],
      [-14, -5],
      [-18, -13],
      [-5, -3],
    ])
  );
};

init();
