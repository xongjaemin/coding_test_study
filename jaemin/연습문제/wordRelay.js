//영어 끝말잇기
function solution(n, words) {
  var answer = [0, 0];
  const duplicate = [];
  let turn = 1;

  for (let i = 0; i < words.length; i++) {
    const playerIdx = (i % n) + 1;
    const word = words[i];
    const previousLastAlphabet =
      i === 0 ? "" : words[i - 1].substring(words[i - 1].length - 1);

    if (
      !duplicate.includes(word) &&
      (i === 0 || word.substring(0, 1) === previousLastAlphabet)
    ) {
      duplicate.push(word);
    } else {
      return [playerIdx, turn];
    }
    if (playerIdx === n) turn += 1;
  }

  return answer;
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
