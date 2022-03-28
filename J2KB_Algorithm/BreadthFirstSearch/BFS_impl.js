const inputs = [
  ["J", "Mex"],
  ["Mor", "H"],
  ["Mex", "Jap"],
  ["Jap", "C"],
  ["J", "Mor"],
  ["Jap", "F"],
  ["I", "F"],
  ["Jap", "E"],
  ["S", "J"],
  ["Mor", "Jap"],
  ["S", "I"],
];

function solution(inputs, target) {
  /**
   * airport : {
   *  incoming:number,
   *  dest:[]
   * }
   */

  //edge case
  if (inputs.length === 0) return [];

  let adjacencyList = topologicalSort(inputs);
  console.log(adjacencyList);
  return BFS(adjacencyList, target);
}

const topologicalSort = (list) => {
  const map = {};

  for (let i = 0; i < list.length; i++) {
    const [from, to] = list[i];
    //incomming 올리기
    if (map[to]) {
      map[to].incoming++;
    } else {
      map[to] = {
        incoming: 1,
        dest: [],
      };
    }
    //dest 넣기
    if (map[from]) {
      map[from].dest.push(to);
    } else {
      map[from] = {
        incoming: 0,
        dest: [to],
      };
    }
  }

  return map;
};

const BFS = (graph, target) => {
  const source = findTheSource(graph);

  if (!source) return "we can't find the source!";

  // let initialDepts = 0;
  let path = source;
  // let queue = [[source, initialDepts]];
  const queue = [[source, path]];

  while (queue.length > 0) {
    // let [key, currentDepth] = queue.shift();
    let [key, currentPath] = queue.shift();

    const currentNode = graph[key];
    const children = currentNode.dest;

    // if (key === target) return currentDepth;
    if (key === target) return currentPath;

    for (let i = 0; i < children.length; i++) {
      // queue.push([children[i], currentDepth + 1]);
      queue.push([children[i], `${currentPath} -> ${children[i]}`]);
    }
    console.log(queue);
  }
  return -1;
};

const findTheSource = (graph) => {
  for (const [key, value] of Object.entries(graph)) {
    if (value.incoming === 0) return key;
  }
  return undefined; //null or -1
};

console.log(solution(inputs, "F"));
