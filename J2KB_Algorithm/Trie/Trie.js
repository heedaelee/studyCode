/*
  Trie Data Structure
  

  Trie => Dictionary => fast search => words
  binary search

  c

  ['cat', 'cats', 'dog', 'dogs', 'app', 'application']

  {
    a: {
      p: {
        p: {
          '*': "app",
          l: {
            i: {...}
          }
        }
      }
    },
    c: {
      a: {
        t: {
          '*': "cat",
          s: {
            '*': "cats"
          }
        }
      }
    }
  }

  O(N * M), N => # of element of list, M => largest # of chars in the word 

  a: {
    apple,
    application,
  }
  
*/

const trie = {};
const targetElement = document.querySelector(".input");
const resultElement = document.querySelector(".result");

const list = ["cat", "cats", "dog", "dogs", "app", "application"];

const solution = (list) => {
  const newTrie = buildTrie(list);
};

const searchDFS = (target) => {
  let rootDict = trie;

  const result = [];

  for (let i = 0; i < target.length; i++) {
    const curTargetChar = target[i];
    if (!rootDict[curTargetChar]) return [];
    rootDict = rootDict[curTargetChar];
  }

  DFSAlg(rootDict, result);
  return result;
};

const DFSAlg = (curRoot, result) => {
  for (let [key, val] of Object.entries(curRoot)) {
    if (key === "*") {
      result.push(val);
      continue;
    }
    DFSAlg(val, result);
  }
};

const buildTrie = (list) => {
  if (!list.length) return {};
  for (let l = 0; l < list.length; l++) {
    const currentWord = list[l];

    let currentRoot = trie;
    for (let c = 0; c < currentWord.length; c++) {
      const curChar = currentWord[c];
      if (!currentRoot[curChar]) {
        currentRoot[curChar] = {};
      }
      currentRoot = currentRoot[curChar];
    }
    currentRoot["*"] = currentWord;
  }
};

solution(list);

targetElement.addEventListener("input", (e) => {
  if (e.target) {
    resultElement.innerHTML = "";
    const val = e.target.value;
    const result = searchDFS(val);
    resultElement.innerHTML = result.join(", ");
  }
});
