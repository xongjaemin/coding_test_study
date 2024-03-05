//프로그래머스 단어 변환

const checkAvailable = (first, second) => {
  //변환 가능 여부 체크 함수
  let count = 0;
  for (let i = 0; i < first.length; i++) {
    first[i] !== second[i] ? (count += 1) : null;
  }

  //두 단어를 비교해 한 글자만 다른 경우만 true 반환
  return count === 1 ? true : false;
};

function solution(begin, target, words) {
  var answer = 0;

  if (!words.includes(target)) return 0;

  let queue = [[begin, 0]]; // BFS 큐 (현재 단어, count)

  while (queue.length > 0) {
    const [current, count] = queue.shift();

    if (current === target) return count;

    words.forEach((word, i) => {
      if (checkAvailable(current, word)) {
        queue.push([word, count + 1]);
      }
    });
  }

  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
