/**
 * 출 : https://velog.io/@sangbooom/JS-BFS-DFS
 */


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

const DFS = (graph, startNode) => {
  let needVisit = []; //탐색 해야할 노드들
  const visited = []; //탐색을 마친 노드들
  needVisit.push(startNode); 

  //노드 탐색 시작
  //탐색해야할 노드가 남아있다면
  while (needVisit.length !== 0) {
    const node = needVisit.shift(); //queue 선입선출
    if (!visited.includes(node)) { //방문안했으면 방문해!
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return visited;
};

console.log(DFS(graph, "A"));
