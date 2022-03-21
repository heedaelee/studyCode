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

var delNodes = function (root, to_delete) {
  const set = new Set(to_delete);
  let list = [];
  // console.log(set);

  function dsf(node) {
    if (!node) return node;

    //dsf 탐색
    node.left = dsf(node.left);
    node.right = dsf(node.right);

    //중복값 없이 탐색할때 set.has 주로 사용;
    if (set.has(node.val)) {
      if (node.left) list.push(node.left);
      if (node.right) list.push(node.right);
      //return null 이 중요
      return null;
    }
    //return node 도 중요
    return node;
  }

  if (!set.has(root.val)) list.push(root);
  dsf(root);
  return list;
};






// const delNodes = (root, to_delete) => {
//   const set = new Set(to_delete);
//   const res = [];

//   const go = (node) => {
//     if (node == null) return node;
//     node.left = go(node.left);
//     node.right = go(node.right);

//     if (set.has(node.val)) {
//       if (node.left) res.push(node.left);
//       if (node.right) res.push(node.right);
//       return null;
//     }
//     return node;
//   };

//   if (!set.has(root.val)) res.push(root);
//   go(root);
//   return res;
// };

// console.log(delNodes(root, to_delete));
console.log(delNodes(root, to_delete));
