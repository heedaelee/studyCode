const list = ["cat", "cats", "dog", "dogs", "app", "application"];
let Trie = {};

function solution(list) {
  buildTrie(list);
  console.log(JSON.stringify(Trie));
  const res = searchDFS("appl");
  console.log(res);
}

function searchDFS(target) {
  let result = [];

  //요게 핵심임!! 변수에 레퍼런스 전달 주는거. 그래야 객체 내부에 포인터 위치를 원하는대로 옮길수 있으니 
  let root = Trie;

  // 입력 target 이후의 객체를 dfs로 삽입
  for (let i = 0; i < target.length; i++) {
    let curChar = target[i];
    if (!root[curChar]) return [];
    root = root[curChar];
  }

  DFSAlg(root, result);
  return result;
}

function buildTrie(list) {
  for (let i = 0; i < list.length; i++) {
    let root = Trie;

    const word = list[i];

    for (let j = 0; j < word.length; j++) {
      if (root[word[j]]) {
        root = root[word[j]];
      } else {
        root[word[j]] = {};
        root = root[word[j]];
      }
    }
    //키만드는 방법
    root["*"] = word;
  }
}

function DFSAlg(curRoot, result) {
  // console.log(curRoot);
  //Object.entries 의 경우 app이라 치면 key는 딱 *, l 레벨 까지만 돈다. i, c, a... 까지 깊게 안들어감. 따라서 재귀로 요청을 해야 계속 깊게 탐색 가능
  for (let [key, val] of Object.entries(curRoot)) {
    // console.log(key);
    if (key === "*") {
      result.push(val);
      continue;
    }

    DFSAlg(val, result);
  }
}

solution(list);
