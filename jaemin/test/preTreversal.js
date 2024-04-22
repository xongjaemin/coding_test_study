class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const preOrder = (node) => {
  if (node === null) return;

  //   console.log(node.value);
  //   preOrder(node.left);
  //   preOrder(node.right);
  const stack = [];
  stack.push(node);
  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node.value);

    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

preOrder(root);
