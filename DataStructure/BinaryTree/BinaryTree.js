//Code ref : https://taesung1993.tistory.com/18

const preOrderResult = [];
const inOrderResult = [];
const postOrderResult = [];
let cnt = 0;

/** 노드 초기화 */
const Node = function (data) {
  this.data = data;
  this.left = null;
  this.right = null;
};

/**
 * Node 형태
 * {
 *    data:string,
 *    left:Node,
 *    right:Node
 * }
 *
 */

/** 루트 초기화 */
const bTree = function () {
  this.root = null;
};

/** 이진트리의 노드 생성 */
bTree.prototype.makeTree = function (left, data, right) {
  const newNode = new Node(data); //노드생성
  newNode.left = left;
  newNode.right = right;
  return newNode;
};

/** 트리의 전위순회 구현 */
bTree.prototype.preOrder = function (treeRoot) {
  /** 테스트 로그 시작 */
  console.log("cnt : ", ++cnt);
  console.log(treeRoot);
  if (treeRoot === null)
    console.log("treeRoot가 Null임 -> 데이터 없다!");
  /** 테스트 로그  끝*/

  if (treeRoot != null) {
    console.log(`preOrderResult.push(${treeRoot.data})`);
    preOrderResult.push(treeRoot.data);
    //재귀
    this.preOrder(treeRoot.left);
    this.preOrder(treeRoot.right);
  }
};

/** 트리의 중위순회 구현 */
bTree.prototype.inOrder = function (treeRoot) {
  /** 테스트 로그 시작 */
  console.log();
  console.log("cnt : ", ++cnt);
  console.log(treeRoot);
  if (treeRoot === null)
    console.log("treeRoot가 Null임 -> 데이터 없다!");
  /** 테스트 로그  끝*/

  if (treeRoot != null) {
    //재귀
    console.log(`left -> this.inOrder(${treeRoot.left?.data})`);
    this.inOrder(treeRoot.left);
    console.log(`inOrderResult.push(${treeRoot.data})`);
    inOrderResult.push(treeRoot.data);
    //재귀
    console.log(`right -> this.inOrder(${treeRoot.right?.data})`);
    this.inOrder(treeRoot.right);
  }
};

/** 트리의 후위순회 구현 */
bTree.prototype.postOrder = function (treeRoot) {
  /** 테스트 로그 시작 */
  console.log();
  console.log("cnt : ", ++cnt);
  console.log(treeRoot);
  if (treeRoot === null)
    console.log("treeRoot가 Null임 -> 데이터 없다!");
  /** 테스트 로그  끝*/

  if (treeRoot != null) {
    //재귀
    console.log(`left -> this.postOrder(${treeRoot.left?.data})`);
    this.postOrder(treeRoot.left);
    //재귀
    console.log(`right -> this.postOrder(${treeRoot.right?.data})`);
    this.postOrder(treeRoot.right);
    console.log(`postOrderResult.push(${treeRoot.data})`);
    postOrderResult.push(treeRoot.data);
  }
};

const main = function () {
  const tree = new bTree();
  const n7 = tree.makeTree(null, "D", null);
  const n6 = tree.makeTree(null, "C", null);
  const n5 = tree.makeTree(null, "B", null);
  const n4 = tree.makeTree(null, "A", null);
  const n3 = tree.makeTree(n6, "/", n7);
  const n2 = tree.makeTree(n4, "*", n5);
  const n1 = tree.makeTree(n2, "-", n3);

  // console.log("전위 순회"); // D->L->R
  // tree.preOrder(n1);
  // console.log(preOrderResult.join(" "));

  // console.log("중위 순회"); // L->D->R
  // tree.inOrder(n1);
  // console.log(inOrderResult.join(" "));

  console.log("후위 순회"); // L->R->D
  tree.postOrder(n1);
  console.log(postOrderResult.join(" "));
};

main();
