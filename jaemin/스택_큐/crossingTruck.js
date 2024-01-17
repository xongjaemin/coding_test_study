//프로그래머스 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
  var answer = 1;

  let remain = [
    {
      weight: 0,
      time: 0,
    },
  ];
  remain = truck_weights.map((truck) => ({
    weight: truck,
    time: bridge_length,
  }));
  let crossing = [remain[0]];
  remain.shift();

  while (remain.length > 0 || crossing.length > 0) {
    crossing = crossing.map((truck) => ({
      weight: truck.weight,
      time: truck.time - 1,
    }));
    crossing = crossing.filter((truck) => truck.time > 0);
    const sum = crossing.reduce((partialSum, a) => partialSum + a.weight, 0);
    if (remain.length > 0) {
      if (sum + remain[0].weight <= weight) {
        crossing.push(remain[0]);
        remain.shift();
      }
    }

    answer++;
  }

  return answer;
}

const init = () => {
  solution(2, 10, [7, 4, 5, 6]);
};

init();
