//프로그래머스 여행경로
function solution(tickets) {
  let answer = ["ICN"];

  tickets.sort();

  const dfs = (leftTickets, airport, answerList) => {
    //남은 티켓이 없이 모두 돌았을 때 현재 경로를 answer에 저장
    //알파벳 순서 정렬을 유지하기 위해 이미 경로가 완성된 경우에는 answer 값을 업데이트 하지 않음.
    if (leftTickets.length === 0 && answer.length !== tickets.length + 1) {
      answer = answerList;
      return;
    }

    for (let i = 0; i < leftTickets.length; i++) {
      const [orgn, dest] = leftTickets[i];

      //현재 위치와 출발지가 동일한 경우
      if (orgn === airport) {
        //해당 경로로 끝까지 탐색할 수 없는 경우 다시 돌아오기 위해 ticket과 answer 모두 복사본을 사용
        const copiedTickets = leftTickets.map((ticket, i) => [...ticket]);
        copiedTickets.splice(i, 1);
        const copiedAnswerList = [...answerList];
        copiedAnswerList.push(dest);
        dfs(copiedTickets, dest, copiedAnswerList);
      }
    }
  };

  dfs(tickets, "ICN", answer);

  return answer;
}

console.log(
  solution([
    ["ICN", "A"],
    ["ICN", "B"],
    ["B", "ICN"],
  ])
);
