function solution(n, words) {
  let answer = [0, 0];
  let wordBook = new Set();
  let lastLetter = [...words[0]][0];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // 만약 끝말잇기 규칙과 위배될 경우
    if (lastLetter != [...word][0] || wordBook.has(word)) {
      answer[0] = (i + 1) % n == 0 ? n : (i + 1) % n; // 사람 순서
      answer[1] = Math.floor(i / n) + 1; // 사람이 말한 단어의 순서
      break;
    } else {
      wordBook.add(word);
      lastLetter = [...word][word.length - 1];
    }
  }

  return answer;
}
