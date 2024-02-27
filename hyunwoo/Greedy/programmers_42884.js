function solution(routes) {
  let answer = 1; // 1번 관점으로 접근

  routes.sort((a, b) => a[0] - b[0]);

  let out = routes[0][1]; // 첫 진출 지점

  routes.forEach((route, index) => {
    if (index === 0) return;

    // 해당 차량의 진입 지점이 현재 진출 지점보다 늦는 경우, 새로운 카메라 추가 설치
    if (out < route[0]) {
      answer++;
      out = route[1];
    }

    // 진출시점이 현재 차량의 진출시점보다 큰 경우, out 갱신
    if (out > route[1]) {
      out = route[1];
    }
  });

  return answer;
}
