/*

  [[math1, math2], [math0, math2], [math2, math3], [math0, math4], [math3, math5], [math4, math5]];

  0 -->   --> 4 --> 5   
        2 --> 3 --> 5
  1 -->

  math1 & math0 -> math2 -> math3

  math1 -> math0 -> math2 -> math3 (V)
  math0 -> math1 -> math2 -> math3 (V)

*/

const solutionAdvanced = (list) => {
  if (!list.length) return [];
  //1. 새로운 인접 리스트를 만든후
  const newAdjList = topologicalAdvanced(list);

  console.log("newAdjList : ", newAdjList);
  //2. BFSAdvanced 함수에 입력
  console.log(BFSAdvanced(newAdjList));
};

const BFSAdvanced = (graph) => {
  const result = [];

  //소스 찾기
  const sources = findTheSources(graph);

  console.log("source : ", sources);
  const queue = [[...sources]];

  //-> ['math0', 'math1'] ['math4', 'math2'] ['math3'] ['math5']
  while (queue.length) {
    const currentLevel = queue.shift();
    const nextLevel = [];
    console.log("test : ", currentLevel);
    
    for (let n = currentLevel.length - 1; n >= 0; n--) {
      const key = currentLevel[n];
      const children = graph[key].dest;
      
      result.push(key);
      
      for (let c = 0; c < children.length; c++) {
        const child = children[c];
        graph[child].pre--;
        if (graph[child].pre === 0) {
          nextLevel.push(child);
        }
      }
    }
    if (nextLevel.length > 0) {
      console.log("nLevel : ", nextLevel)
      queue.push(nextLevel);
    }
  }
  return result.join(" -> ");
};

const findTheSources = (tree) => {
  const sources = [];
  for (let [key, val] of Object.entries(tree)) {
    if (val.pre === 0) {
      sources.push(key);
    }
  }
  return sources;
};

const topologicalAdvanced = (list) => {
  const map = {};
  // Dictionary or map
  /*
    source --> incoming X
    mathN: {
      pre: 선행조건 과목수
      dest: [] 도착 과목요소들
    }
  */
  for (let i = 0; i < list.length; i++) {
    //리스트 돌면서..
    const [pre, post] = list[i];
    //map[pre]가 있으면 dest 추가하기, 없으면 새로만들기
    if (map[pre]) {
      map[pre].dest.push(post);
    } else {
      map[pre] = {
        pre: 0,
        dest: [post],
      };
    }
    //map[post]가 있으면 pre 카운트 하기, 없으면 새로만들기
    if (map[post]) {
      map[post].pre++;
    } else {
      map[post] = {
        pre: 1,
        dest: [],
      };
    }
  }

  return map;
};

solutionAdvanced([
  ["math1", "math2"],
  ["math0", "math2"],
  ["math2", "math3"],
  ["math0", "math4"],
  ["math3", "math5"],
  ["math4", "math5"],
]);
