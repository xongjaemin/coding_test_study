//프로그래머스 주차 요금 계산
const hourToMin = (string) => {
  let [hour, min] = string.split(":");
  hour = parseInt(hour);
  min = parseInt(min);

  return hour * 60 + min;
};

function solution(fees, records) {
  var answer = [];
  const [basicTime, basicFee, unitTime, unitFee] = fees; // 기본시간, 기본 요금, 단위 시간, 단위 요금

  const table = new Map();

  records.forEach((record, i) => {
    const [time, number, type] = record.split(" ");

    if (type === "IN") {
      if (!table.has(number)) {
        table.set(number, {
          lastIn: hourToMin(time),
          timeUse: 0,
          state: "IN",
        });
      } else {
        table.set(number, {
          lastIn: hourToMin(time),
          timeUse: table.get(number).timeUse,
          state: "IN",
        });
      }
    } else if (type === "OUT") {
      table.set(number, {
        lastIn: table.get(number).lastIn,
        timeUse:
          table.get(number).timeUse +
          (hourToMin(time) - table.get(number).lastIn),
        state: "OUT",
      });
    }
  });

  const sortedTable = [...table].sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < sortedTable.length; i++) {
    let usedTime = 0;
    if (sortedTable[i][1].state === "IN") {
      usedTime =
        sortedTable[i][1].timeUse +
        (hourToMin("23:59") - sortedTable[i][1].lastIn);
    } else {
      usedTime = sortedTable[i][1].timeUse;
    }

    console.log(usedTime);

    if (usedTime <= basicTime) answer.push(basicFee);
    else {
      answer.push(
        basicFee + Math.ceil((usedTime - basicTime) / unitTime) * unitFee
      );
    }
  }

  return answer;
}

solution(
  [180, 5000, 10, 600],
  [
    "05:34 5961 IN",
    "06:00 0000 IN",
    "06:34 0000 OUT",
    "07:59 5961 OUT",
    "07:59 0148 IN",
    "18:59 0000 IN",
    "19:09 0148 OUT",
    "22:59 5961 IN",
    "23:00 5961 OUT",
  ]
);
