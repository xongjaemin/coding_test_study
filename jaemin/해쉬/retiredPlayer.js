//프로그래머스 완주하지 못한 선수
function solution(participant, completion) {
  var answer = "";

  participant.sort();
  completion.sort();

  console.log(participant, completion);

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }

  return answer;
}

const init = () => {
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
};

init();
