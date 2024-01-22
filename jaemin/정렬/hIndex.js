//프로그래머스 H-index
function solution(citations) {
  var answer = 0;

  //내림차순으로 정렬
  citations = citations.sort((a, b) => b - a);

  //논문의 인용 수가 해당 논문보다 인용 수가 높은 논문의 개수보다 많으면 answer 증가
  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) {
      answer++;
    }
  }

  return answer;
}

const init = () => {
  solution([3, 0, 6, 1, 5]);
};

init();
