// Union-Find 구현
function UnionFind(size) {
    const parent = new Array(size).fill(0).map((_, index) => index);

    function find(x) {
        if (parent[x] === x) return x;
        return find(parent[x]);
    }

    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) parent[rootX] = rootY;
    }

    return { find, union };
}

// Kruskal 알고리즘 함수
function kruskalAlgorithm(costs, unionFind) {
    let totalCost = 0;

    costs.sort((a, b) => a[2] - b[2]);

    for (const cost of costs) {
        const [from, to, edgeCost] = cost;
        if (unionFind.find(from) !== unionFind.find(to)) {
            unionFind.union(from, to);
            totalCost += edgeCost;
        }
    }

    return totalCost;
}

// 최종 solution 함수
function solution(n, costs) {
    const unionFind = UnionFind(n);
    const answer = kruskalAlgorithm(costs, unionFind);

    return answer;
}

console.log(solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]));
