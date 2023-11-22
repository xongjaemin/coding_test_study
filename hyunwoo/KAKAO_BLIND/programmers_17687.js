function solution(n, t, m, p) {
  let answer = "";
  let num = 0; // n 진수로 변환되기 전 숫자
  let connected = ""; // n진수로 변환된 숫자 모음

  // 처음 튜브의 순서가 오는 경우 만큼 숫자 증가
  while (connected.length <= p) {
    connected += num.toString(n);
    num++;
  }

  // 처음 튜브의 숫자를 구하고 그 값을 answer에 추가
  answer += connected[p - 1];
  connected = connected.slice(p);
  t--;

  // 이후부터는 한바퀴 돌아 튜브에서 돌아왔을 경우로 반복
  while (t > 0) {
    connected += num.toString(n);
    num++;
    if (connected.length > m) {
      answer += connected[m - 1];
      connected = connected.slice(m);
      t--;
    }
  }

  return answer.toUpperCase();
}
