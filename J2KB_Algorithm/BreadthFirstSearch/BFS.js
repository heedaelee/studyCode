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

// ['S', 'I', 'F'] => S -> I -> F
// path length => 2;

const solution = (list, target) => {
  // edge case
  if (!list.length) return [];

  const adjacencyList = topologicalSort(list);
  return BFS(adjacencyList, target);
};

const topologicalSort = (list) => {
  // Dictionary or map
  /*
    source --> incoming X
    airport: {
      incoming: 
      dest: []
    }
  
  */
  const map = {};

  for (let i = 0; i < list.length; i++) {
    const [from, to] = list[i];

    if (map[from]) {
      map[from].dest.push(to);
    } else {
      map[from] = {
        incoming: 0,
        dest: [to],
      };
    }

    if (map[to]) {
      map[to].incoming++;
    } else {
      map[to] = {
        incoming: 1,
        dest: [],
      };
    }
  }
  return map;
};

const BFS = (graph, target) => {
  // find the source
  const source = findTheSource(graph);
  if (!source) return "We can not find the source!";

  let path = source;

  //만약 depth 구하려면 - a방식
  // initialDepth
  // const queue = [[source, initialDepth]];
  const queue = [[source, path]];
  // while and queue

  while (queue.length) {
    const [key, currentPath] = queue.shift();
    //a방식
    // const [key, currentDepth] = queue.shift();
    const currentNode = graph[key];
    const children = currentNode.dest;

    if (key === target) return currentPath;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      queue.push([child, `${currentPath} -> ${child}`]);

      //a방식
      // queue.push([child, currentDept]);
    }
    console.log(queue);
  }

  return -1;
};

const findTheSource = (graph) => {
  for (let [key, val] of Object.entries(graph)) {
    if (val.incoming === 0) return key;
  }
  // edge case
  return undefined; // null or -1
};

solution(inputs, "F");
