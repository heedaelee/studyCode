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

//최단거리 문제
// ['S', 'I', 'F'] => S -> I -> F
// path length => 2;

const solution = (list, target) => {
  // edge case
  if (!list.length) return [];

  const adjacencyList = topologicalSort(list);
  console.log(adjacencyList);
  return BFS(adjacencyList, target);
};

//Work : 위상정렬화 시키기 (데이터 정리)
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

    //from으로 할수 있는것 -> map에 공항 있으면 dest 채우기 && 없으면 dest 채워진 걸로 새로 만들기
    if (map[from]) {
      map[from].dest.push(to);
    } else {
      map[from] = {
        incoming: 0,
        dest: [to],
      };
    }
    //to로 할수 있는것 -> map에 공항 있으면 incoming +1 && 없으면 incoming :1 dest :[]으로 새로 하나 만들기
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
  // let initialDepth = 0;
  // const queue = [[source, initialDepth]];

  const queue = [[source, path]];
  // while and queue
  while (queue.length) {
    const [key, currentPath] = queue.shift();

    //a방식
    // let [key, currentDepth] = queue.shift();

    const currentNode = graph[key];
    const children = currentNode.dest;

    if (key === target) return currentPath;
    // a방식
    // if (key === target) return currentDepth;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      queue.push([child, `${currentPath} -> ${child}`]);

      //a방식
      // const plusOneDepth = currentDepth + 1;
      // queue.push([child, plusOneDepth]);
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

console.log(solution(inputs, "F"));
