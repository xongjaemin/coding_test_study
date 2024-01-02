function solution(n, edge){
    let answer = 0;

    // 그래프를 객체 형식으로 생성
    const graph = {};
    for(let i = 1; i <= n; i ++){
        graph[i] = [];
    }

    edge.forEach(([a,b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });

    // BFS(최단거리)
    const queue = [1]; // 시작지점을 node 1로 설정한다.
    const distances = new Array(n + 1).fill(-1); // 0으로 설정하면, 본인 자신이 되어버리기 때문에 아예 닿지 못하는 -1로 설정한다.
    distances[1] = 0; // 노드1에서 노드1의 거리는 0이다.

    while(queue.length){
        const node = queue.shift();
        for(const neighbor of graph[node]){
            // 못 가는 곳이면 지금 node의 neighbor니까 지금 노드 + 1의 거리를 지정하고,
            // 갈 수 있는 곳이면 이미 1이 갈 수 있다는 것과 마찬가지기 때문에 최단거리로 판단하고 넘어간다.
            if(distances[neighbor] === -1){
                distances[neighbor] = distances[node] + 1;
                queue.push(neighbor);
            }
        }
    }

    // MAX값을 찾고 갯수를 센다.
    const MAX = Math.max(...distances);
    distances.forEach(value => {
        if(value === MAX) answer ++;
    });

    return answer;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])); // should return 3