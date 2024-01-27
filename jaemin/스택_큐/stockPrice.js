//프로그래머스 주식가격
function solution(prices) {
  var answer = new Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        answer[i] += 1;
      } else {
        answer[i] += 1;
        break;
      }
    }
  }

  return answer;
}

const init = () => {
  solution([1, 2, 3, 2, 3]);
};

init();
