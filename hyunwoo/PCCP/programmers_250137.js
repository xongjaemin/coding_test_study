function solution(bandage, health, attacks) {
  const maxHealth = health;
  const [time, base, bonus] = bandage;

  let lastAttack = 0;

  for (const [currentAttack, damage] of attacks) {
    const timeDiff = currentAttack - lastAttack - 1; //시간 차이 계산
    const heal = timeDiff * base + Math.floor(timeDiff / time) * bonus; // 기본회복 + 추가 회복 계산

    health =
      health + heal < maxHealth ? health + heal - damage : maxHealth - damage; // 자신의 회복량(최대)에서 데미지 적용
    lastAttack = currentAttack; //최근 공격시간 최신화

    if (health <= 0) return -1;
  }

  return health;
}
