function solution(tickets) {
  let answer = [];

  const dfs = (depart, remainTicket, path) => {
    const updatePath = [...path, depart];
    if (remainTicket.length === 0)
      answer.push(updatePath); // dfs를 통해 나온 결과 모두 추가
    else {
      remainTicket.forEach((ticket, index) => {
        if (ticket[0] !== depart) return;

        const arrival = ticket[1];
        const updateRemainTicket = [...remainTicket];
        updateRemainTicket.splice(index, 1); // 해당 티켓 삭제
        dfs(arrival, updateRemainTicket, updatePath);
      });
    }
  };

  dfs("ICN", tickets, []);
  return answer.sort()[0]; // 알파벳 정렬해서 가장 앞서는거만
}
