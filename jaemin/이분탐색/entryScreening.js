//프로그래머스 입국심사
function solution(n, times) {
  let answer = 0;

  let left = 1; //최소시간 1분
  let right = Math.max(...times) * n; //최대시간 n * 가장 오래걸리는 심사대 시간

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); //전체 걸린 시간
    let complete = 0; //mid 동안 심사를 완료한 사람 수

    times.forEach((time, i) => {
      //mid 동안 각 심사대에서 심사를 완료할 수 있는 사람의 수 sum
      complete += Math.floor(mid / time);

      //n 이상의 사람을 심사할 수 있다면 반복문 종료
      if (complete >= n) {
        return;
      }
    });

    if (complete >= n) {
      //n 이상의 입국심사를 완료할 수 있을 때, right를 mid-1로 이동
      answer = mid;
      right = mid - 1;
    } else {
      //완료가 불가능 할 때 left를 mid+1로 이동
      left = mid + 1;
    }
  }

  return answer;
}

const init = () => {
  console.log(solution(6, [7, 10]));
};

init();
