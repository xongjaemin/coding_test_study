//프로그래머스 오픈채팅방
function solution(record) {
  const answer = [];

  const userList = new Map();

  //uid별 마지막 닉네임 저장
  record.map((rec, i) => {
    const [command, uid, name] = rec.split(" ");

    if (command === "Enter") {
      userList.set(uid, name);
    } else if (command === "Change") {
      userList.set(uid, name);
    }
  });

  record.map((rec, i) => {
    const [command, uid, name] = rec.split(" ");

    if (command === "Enter") {
      answer.push(`${userList.get(uid)}님이 들어왔습니다.`);
    } else if (command === "Leave") {
      answer.push(`${userList.get(uid)}님이 나갔습니다.`);
    }
  });

  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
