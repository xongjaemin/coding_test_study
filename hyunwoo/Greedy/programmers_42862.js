function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]); //cost 오름차순 정렬
  let minumCost = 0;
  let connectIsland = [new Set([costs[0][0]])]; // 연결된 섬의 노드 넘버 저장 (초기 시작은 가장 작은 cost의 섬)

  costs.forEach((data, index) => {
    const parentA = data[0];
    const parentB = data[1];
    const cost = data[2];
    let newUnion = true; // 새로운 집합의 생성 여부
    let isUnion = false; // 집합간 union 여부
    let canUnionNum1 = -1; // union될 집합의 index1
    let canUnionNum2 = -1; // union될 집합의 index2

    // 모든 연결 섬 리스트들을 체크
    for (let i = 0; i < connectIsland.length; i++) {
      // 연결된 섬 리스트에 두 섬이 모두 존재할 때 => 이미 연결되어있음.
      if (connectIsland[i].has(parentA) && connectIsland[i].has(parentB)) {
        newUnion = false;
        break;
      }
      // 연결된 섬 리스트에 한 섬만 존재할 때 => 새로 연결 할 수 있음.
      else if (connectIsland[i].has(parentA) || connectIsland[i].has(parentB)) {
        newUnion = false;
        connectIsland[i].add(parentA);
        connectIsland[i].add(parentB);
        if (canUnionNum1 == -1) {
          canUnionNum1 = i;
          minumCost += cost;
        } else if (canUnionNum1 != -1) {
          canUnionNum2 = i;
          isUnion = true;
        }
      }
    }

    // 새로운 섬 연결 집합 정보 추가
    if (newUnion) {
      let newConnectIsland = new Set([parentA, parentB]);
      connectIsland.push(newConnectIsland);
      minumCost += cost;
    }
    // 서로 다른 집합끼리 정보 union
    else if (isUnion) {
      let union = new Set([
        ...connectIsland[canUnionNum1],
        ...connectIsland[canUnionNum2],
      ]);
      connectIsland.splice(canUnionNum2, 1);
      connectIsland.splice(canUnionNum1, 1);
      connectIsland.push(union);
    }
  });
  return minumCost;
}
