function dfs(graph, startNode) {
    const stack = [startNode]; // 시작 노드를 스택에 추가
    const visited = new Array(graph.length).fill(false); // 방문 여부를 나타내는 배열 초기화

    while (stack.length > 0) {
        const currentNode = stack.pop(); // 스택에서 노드를 꺼냄
        visited[currentNode] = true; // 노드를 방문으로 표시
        // currentNode를 처리하는 작업을 수행
        console.log(currentNode);

        // currentNode와 연결된 이웃 노드를 스택에 추가
        for (let neighbor = 0; neighbor < graph.length; neighbor++) {
            if (graph[currentNode][neighbor] === 1 && !visited[neighbor]) {
                stack.push(neighbor);
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

// DFS 시작 노드 설정
const startNode = 0; // 시작 노드 선택
dfs(graph, startNode); // DFS 시작
