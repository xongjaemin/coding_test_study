function solution(clothes) {
    var answer = 1;

    let clothMap = new Map();

    for(let i = 0; i < clothes.length; i ++){
        if(!clothMap.has(clothes[i][1])){
            clothMap.set(clothes[i][1],[clothes[i][0]]);
        } else {
            clothMap.get(clothes[i][1]).push(clothes[i][0]);
        }
    }
    console.log(clothMap)

    for(let [category, clothes] of clothMap){
        answer *= clothes.length + 1; // 카테고리에 해당하는 의상을 착용하지 않을 경우 + 1
    }

    return answer - 1; // 모든 카테고리에서 의상을 착용하지 않는 경우는 없기 때문에 -1
    // 모든 카테고리에서 의상을 착용하지 않는 경우 === 모든 카테고리에서 의상을 착용하지 않을 경우의 수
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])) // should return 5