//프로그래머스 구명보트
function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);

  let i = 0;
  let j = people.length - 1;

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++;
    }
    j--;
    answer++;
  }

  return answer;
}

const init = () => {
  console.log(solution([70, 80, 50], 100));
};

init();
