//pccp 기출문제 1번 붕대감기
function solution(bandage, health, attacks) {
  //bandage (시전 시간, 1초 당 회복량, 추가 회복량)
  const time = attacks[attacks.length - 1][0];
  let bandageTime = 0;
  let currentHealth = health;

  for (let i = 1; i <= time; i++) {
    console.log("시간: ", i);
    if (attacks[0][0] === i) {
      //해당 시간에 공격 받은 경우
      bandageTime = 0;
      currentHealth -= attacks[0][1];

      if (currentHealth <= 0) return -1;
      attacks.shift();
    } else {
      currentHealth += bandage[1];
      bandageTime += 1;
      if (bandageTime === bandage[0]) {
        //시전 시간 채우면 추가 체력
        currentHealth += bandage[2];
        bandageTime = 0;
      }
      if (currentHealth > health) currentHealth = health; //최대 체력 제한
    }
    console.log("체력: ", currentHealth);
  }

  return currentHealth;
}

const init = () => {
  console.log(
    solution([1, 1, 1], 5, [
      [1, 2],
      [3, 2],
    ])
  );
};

init();
