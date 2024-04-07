//프로그래머스 금과 은 운반하기

//주어진 시간 안에 필요한 금과 은을 조달할 수 있는지 여부 리턴 함수
const isAvailable = (a, b, g, s, w, t, totalTime) => {
  //시간 안에 조달할 수 있는 최대 광물 무게
  let totalWeight = 0; //금과 은
  let totalGoldWeight = 0; //금
  let totalSilverWeight = 0; //은

  for (let i = 0; i < g.length; i++) {
    //옮길 수 있는 최대 광물의 무게 :
    //(전체 시간 / (이동시간 * 2)) * 한 번에 옮길 수 있는 최대 광물의 양
    let maxWeight = Math.floor(totalTime / (t[i] * 2)) * w[i];
    //편도로 옮길 수 있는 경우 광물의 양 더하기
    if (Math.floor(totalTime % (t[i] * 2)) > t[i]) maxWeight += w[i];

    totalWeight += Math.min(g[i] + s[i], maxWeight);
    totalGoldWeight += Math.min(g[i], maxWeight);
    totalSilverWeight += Math.min(s[i], maxWeight);
  }

  if (totalGoldWeight >= a && totalSilverWeight >= b && totalWeight >= a + b)
    return true;
  else return false;
};

function solution(a, b, g, s, w, t) {
  let answer = -1;

  //이분탐색을 위한 left, right 포인터
  let left = 1;
  let right = 1;

  //최대 시간 구하기
  for (let i = 0; i < g.length; i++) {
    let weight = g[i] + s[i];
    let count = Math.floor(weight / w[i]); //운반 횟수
    if (weight % w[i] > 0) count += 1; //나머지가 있을 경우 + 1

    let time = 2 * t[i] * count; //이동 시간 (왕복)
    right = Math.max(right, time);
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (isAvailable(a, b, g, s, w, t, mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  answer = right;

  return answer;
}

console.log(solution(10, 10, [100], [100], [7], [10]));
