function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const queue = [];
    const visited = Array.from(Array(rows), () => Array(cols).fill(false));

    queue.push([0, 0, 1]);
    visited[0][0] = true;

    while(queue.length){// shift를 통해서 queue에서 가장 dist가 작은 값을 계속 가져와서 동서남북을 확인하기 때문에 결국엔 최단거리로 도달한다.

        const [x, y, dist] = queue.shift();
        if(x == rows - 1 && y == cols -1) return dist;

        for(let i = 0; i < 4; i ++){
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx >= 0 && ny >= 0 && nx < rows && ny < cols && maps[nx][ny] === 1 && visited[nx][ny] === false){
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    return -1;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]])) // should return 11
