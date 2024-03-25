//프로그래머스 광물 캐기
const getPickCost = (pickType, mineralType) => {
  //피로도 cost 반환 함수
  if (pickType === 0) {
    return 1;
  } else if (pickType === 1) {
    if (mineralType === 0) return 5;
    else return 1;
  } else {
    if (mineralType === 0) return 25;
    else if (mineralType === 1) return 5;
    else return 1;
  }
};

function solution(picks, minerals) {
  let answer = 0;
  const mineralGroup = [];

  const length = Math.ceil(minerals.length / 5); //광석 그룹의 개수
  const pickNum = picks[0] + picks[1] + picks[2]; //곡괭이의 개수

  for (let i = 0; i < length; i++) {
    if (i >= pickNum) break; //곡괭이의 갯수보다 커지면 캘 수 없으므로 break
    const arr = [0, 0, 0]; //다이아, 철, 돌

    minerals.splice(0, 5).forEach((el) => {
      if (el === "diamond") arr[0] += 1;
      else if (el === "iron") arr[1] += 1;
      else arr[2] += 1;
    });

    mineralGroup.push(arr);
  }

  //cost가 많이 드는 순서대로 광석 그룹 정렬
  mineralGroup.sort((a, b) => {
    return a[0] !== b[0]
      ? b[0] - a[0]
      : a[1] !== b[1]
      ? b[1] - a[1]
      : b[2] - a[2];
  });

  console.log(mineralGroup);

  mineralGroup.forEach((el) => {
    let pickIdx = 0; //사용하는 곡괭이의 인덱스

    if (picks[0] !== 0) pickIdx = 0;
    else if (picks[1] !== 0) pickIdx = 1;
    else pickIdx = 2;

    if (picks[pickIdx] !== 0) {
      for (let i = 0; i < 3; i++) {
        answer += el[i] * getPickCost(pickIdx, i);
      }

      picks[pickIdx] -= 1;
    }
  });

  return answer;
}

console.log(
  solution(
    [0, 1, 1],
    [
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "iron",
      "iron",
      "iron",
      "diamond",
    ]
  )
);
