function solution(name, yearning, photo) {
  var answer = [];

  for (let i = 0; i < photo.length; i++) {
    answer.push(0);
    name.forEach((value, index) => {
      if (photo[i].includes(value)) {
        answer[i] += yearning[index];
      }
    });
  }
  return answer;
}
