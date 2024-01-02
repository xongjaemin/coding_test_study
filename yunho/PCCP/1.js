function solution(bandage, health, attacks) {
    const [coolTime, selfRecoverAmount, addRecoverAmount] = bandage;
    const lastAttackTime = attacks[attacks.length - 1][0];
    const maxHealth = health;
    let attack = attacks.shift();
    let recoverFlag = 0;

    for(let time = 1; time <= lastAttackTime; time ++){
        recoverFlag ++;
        const [attackTime, attackDamage] = attack;
        // 몬스터 어택
        if(attackTime === time){
            health -= attackDamage;
            recoverFlag = 0;

            if(health <= 0) return -1;

            attack = attacks.shift();
            continue;
        }
        // 자가 회복
        health += selfRecoverAmount;

        // 붕대 회복
        if(recoverFlag === coolTime){
            health += addRecoverAmount;
            recoverFlag = 0;
        }

        // 최대 체력 초과 확인
        if(health > maxHealth) health = maxHealth;
    }


    return health;
}

console.log(solution([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]])) // should return 5