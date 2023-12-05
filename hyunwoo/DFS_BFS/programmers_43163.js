const dfs = (current, target, words, visited) => {
  // 현재 단어 방문 체크
  if (words.indexOf(current) != -1) visited[words.indexOf(current)] = true;
  // 현재 단어가 target일 경우
  if (current == target) return visited.filter((value) => value == true).length;

  let isCan = false; // 다른 단어로 변환이 가능 여부
  let value = Infinity; // dfs를 통해 얻은 dfs 비교를 위한 값 설정
  words.forEach((word, index) => {
    let diff = 0;
    if (visited[index] == false) {
      [...word].forEach((letter, i) => {
        if (letter != [...current][i]) diff++;
      });
      if (diff == 1) {
        isCan = true;
        value = Math.min(value, dfs(word, target, words, [...visited]));
      }
    }
  });

  return isCan ? value : Infinity;
};

function solution(begin, target, words) {
  let visited = Array.from({ length: words.length }, () => false);
  let answer = dfs(begin, target, words, visited, false);
  // 만약 시작 단어가 words에 있는 경우
  if (words.indexOf(begin) != -1) answer--;
  return answer == Infinity ? 0 : answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
