function bfs(graph, startNode) {
    const queue = [startNode]; // 시작 노드를 큐에 추가
    const visited = new Array(graph.length).fill(false); // 방문 여부를 나타내는 배열 초기화
    visited[startNode] = true; // 시작 노드를 방문으로 표시

    while (queue.length > 0) {
        const currentNode = queue.shift(); // 큐에서 노드를 꺼냄
        // currentNode를 처리하는 작업을 수행
        // 예: console.log(currentNode);

        // currentNode와 연결된 이웃 노드를 큐에 추가
        for (let neighbor = 0; neighbor < graph.length; neighbor++) {
            if (graph[currentNode][neighbor] === 1 && !visited[neighbor]) {
                visited[neighbor] = true; // dfs와 다르게 이웃 노드를 true로 설정한다.(한 번 방문한 곳은 다시 방문하지 않기 위해)
                queue.push(neighbor);
            }
        }
    }
}

// 그래프 정의 (1차원 배열)
const graph = [
    [0, 1, 1, 0, 0],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0]
];

// BFS 시작 노드 설정
const startNode = 0; // 시작 노드 선택
bfs(graph, startNode); // BFS 시작
