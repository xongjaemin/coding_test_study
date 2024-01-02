function dfs(node, visited, adjacencyList) {
    visited[node - 1] = true; // 방문한 노드 표시
    let edgesCount = 0; // 간선의 개수를 세기 위한 변수
    console.log(node); // 현재 노드 출력

    for (const neighbor of adjacencyList[node - 1]) {
        edgesCount++; // 간선의 개수 증가
        if (!visited[neighbor - 1]) {
            edgesCount += dfs(neighbor, visited, adjacencyList); // 재귀 호출을 통해 간선의 개수 추가
        }
    }

    return edgesCount; // 현재 노드를 포함한 연결된 컴포넌트의 간선 개수 반환
}

function findConnectedComponents(adjacencyList) {
    const visited = Array(adjacencyList.length).fill(false);

    for (let i = 0; i < adjacencyList.length; i++) {
        if (!visited[i]) {
            console.log("Connected Component:");
            const edgesCount = dfs(i + 1, visited, adjacencyList);
            console.log(`Edges count: ${edgesCount}`);
        }
    }
}

const edges = [[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]];
let maxNode = 0;

for (const edge of edges) {
    maxNode = Math.max(maxNode, edge[0], edge[1]);
}

const adjacencyList = Array.from({ length: maxNode }, () => []);

for (const edge of edges) {
    const [start, end] = edge;
    adjacencyList[start - 1].push(end);
}

findConnectedComponents(adjacencyList);
