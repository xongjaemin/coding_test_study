//프로그래머스 셔틀버스

//분 -> 시:분 변환
const minuteToTime = (minute) => {
  const hour = String(Math.floor(minute / 60)).padStart(2, "0");
  const min = String(minute % 60).padStart(2, "0");

  return hour + ":" + min;
};

function solution(n, t, m, timetable) {
  let answer = 0;
  let busTime = 540;

  timeTableToMin = timetable.map((time) => {
    const hour = Number(time.substring(0, 2));
    const min = Number(time.substring(3));

    return hour * 60 + min;
  });
  timeTableToMin.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (i > 0) busTime += t; //버스 시간
    let peopleNum = 0; //탑승 승객수
    const isLastBus = i === n - 1 ? true : false; //마지막 버스 여부
    let lastBoardingTime = 0; //마지막 승객 탑승 시간

    while (1) {
      lastBoardingTime = timeTableToMin[0];
      if (lastBoardingTime <= busTime) {
        peopleNum += 1;
        timeTableToMin.shift();
      } else {
        break;
      }

      if (peopleNum === m) break;
    }

    if (isLastBus) {
      if (peopleNum < m) answer = busTime; //마지막 버스에 자리가 있을 경우
      else if (peopleNum === m) answer = lastBoardingTime - 1; //마지막 버스에 자리가 없을 경우
    }
  }

  answer = minuteToTime(answer);

  return answer;
}
