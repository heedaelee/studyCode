const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

function BFS(graph, start) {
  const checked = [];
  let needVisit = [];

  const startNode = start;
  needVisit.push(startNode);

  while (0 < needVisit.length) {
    const node = needVisit.shift();
    if (!checked.includes(node)) {
      //checked[node] 이 형태 사용 X
      checked.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return checked;
}

console.log(BFS(graph, "A"));
//A B C D G H I E F J
