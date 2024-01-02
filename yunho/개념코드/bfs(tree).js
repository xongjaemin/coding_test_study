class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

function bfs(root) {
    const queue = [root];

    while (queue.length > 0) {
        console.log(queue);
        const currentNode = queue.shift();

        for (const child of currentNode.children) {
            queue.push(child);
        }
    }
}

// 예시 트리 생성
const root = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
const grandchild1 = new TreeNode(4);
const grandchild2 = new TreeNode(5);

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandchild1);
child2.addChild(grandchild2);

// BFS로 트리 탐색
bfs(root);

//   1
//  / \
// 2   3
// |   |
// 4   5
