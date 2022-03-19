class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}

const root = new Node(
  1,
  new Node(2, new Node(4, null, null), new Node(5, null, null)),
  new Node(3, new Node(6, null, null), new Node(7, null, null))
);

const to_delete = [3, 5];

// console.log(root);

var delNodes = function (root, to_delete) {
  let array = [];
  let modifedRootNode = dsf(root);
  array.unshift(modifedRootNode);

  return array;

  function dsf(node) {
    if (!node) return;
    for (let i = 0; i < to_delete.length; i++) {
      if (node.val === to_delete[i]) {
        node.val = null;
      }
    }
    if (node.val === null && (node.left || node.right)) {
      if (node.left) {
        array.push(node.left);
        delete node.left;
      }
      if (node.right) {
        array.push(node.right);
        delete node.right;
      }
    }
    dsf(node.left);
    dsf(node.right);

    return node;
  }
};

console.log(delNodes(root, to_delete));
