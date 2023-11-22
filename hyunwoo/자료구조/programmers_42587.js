function solution(priorities, location) {
  let process = new Array(priorities.length).fill(0).map((_, i) => i); // 프로세스
  let seq = []; // 작동 순서
  while (priorities.length > 0) {
    let pick = priorities.indexOf(Math.max(...priorities)); // 가장 우선순위가 높은 원소의 위치
    seq.push(process[pick]); // 우선순위가 높은 첫번째 요소 순서에 추가
    process = [...process.slice(pick), ...process.slice(0, pick)]; //pic을 기준으로 배열 순서 조정
    priorities = [...priorities.slice(pick), ...priorities.slice(0, pick)];
    process.shift(); // 맨 앞 요소 삭제
    priorities.shift();
  }
  return seq.indexOf(location) + 1;
}
