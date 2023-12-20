function solution(skill, skill_trees) {
  let answer = 0;
  let reg = new RegExp(`[${skill}]`, "g"); //skill만 추출한 정규식

  skill_trees.forEach((value, index) => {
    let valid_skill = value.match(reg); //skill 추출하여 배열로 저장
    let skill_order = valid_skill
      ? valid_skill.map((s) => skill.indexOf(s))
      : []; // skill 순서 넘버로 변환
    let isValid = true;

    for (let i = 0; i < skill_order.length; i++) {
      if (skill_order[i] !== i) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      answer++;
    }
  });

  return answer;
}
