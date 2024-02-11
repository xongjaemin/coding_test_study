function solution(picks, minerals) {
  let answer = 0;
  let cutCount = Math.ceil(minerals.length / 5);
  if ((picks[0] + picks[1] + picks[2]) * 5 < minerals.length)
    minerals = minerals.splice(0, 5 * (picks[0] + picks[1] + picks[2]));
  let slicing = [];

  for (let i = 0; i < cutCount; i++) {
    let data = { diamond: 0, iron: 0, stone: 0 };
    minerals.splice(0, 5).forEach((x) => data[x]++);
    slicing.push([
      data.diamond + data.iron + data.stone,
      data.diamond * 5 + data.iron + data.stone,
      data.diamond * 25 + data.iron * 5 + data.stone,
    ]);
  }

  slicing.sort((a, b) => b[2] - a[2]);
  console.log(slicing);
  picks.forEach((data, i) => {
    while (data) {
      if (slicing.length === 0) return answer;
      answer += slicing.shift()[i];
      data--;
    }
  });

  return answer;
}
