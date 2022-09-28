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

//HTML input 검색창에 검색결과 array를 return 하는 함수
// 이 함수 전에 solution(list) 함수가 실행되어 rootDict 객체 내엔 이미 setting이 만들어 져 있는 상태
const searchDFS = (target) => {
  let rootDict = trie;

  const result = [];

  //이 for문 역할 : 루트에서 해당 단어까지 객체를 탐색해서
  //해당 영역까지 반환하는 역할을 함. 즉 입력 단어 끝까지 깊게 가줌
  //역할을 잘못 이해하기 쉬움.. endmark *을 탐색해서 반환해주는 역할은 DFSAlg() 가 해줌
  for (let i = 0; i < target.length; i++) {
    const curTargetChar = target[i];
    if (!rootDict[curTargetChar]) return [];
    //for문 내 객체 할당. 이 원리가 신기함 >.< !!!
    rootDict = rootDict[curTargetChar];
  }

  DFSAlg(rootDict, result);
  return result;
};

//NOTE: 이 DFSAlg 함수가 중요. 내가 잘못이해하고 있었음...
//우선 동작원리는 * 를 찾아 끝까지 탐색함. 위에 for문은 입력 텍스트 까지 찾아 반환한다면,
//이 DFSAlg()는 *까지 탐색하고 반환함.

//만약 ca까지 타이핑 했다면, t:{...}부터 객체를 curRoot로 받아옴
//그걸 for문 돌리면서, 단어 end mark인 '*'까지 "DFS"로 탐색!
//*를 entries 돌려서 key로 찾으면 value에 이미 기록해둔 word를 넣어주는데
//찾았다고 return 해주면 안되고.. 다수개일수 있으니 continue로 해줘야..다음 key에서도 검색이 이우어질 수 있다.
const DFSAlg = (curRoot, result) => {
  // console.log(curRoot);
  for (let [key, val] of Object.entries(curRoot)) {
    if (key === "*") {
      console.log(val);
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
      // 특정 문자가 없으면 {}를 만들어주고, 현재 head객체에 만든 {}를 할당, 그러면 깊게 갈수 있지
      // 있으면, 바로 head 객체에 할당. 깊게감
      // 즉, 없으면 만들어주고 현재 헤드에 덧할당, 있으면 그냥 덧할당 원리임...
      if (!currentRoot[curChar]) {
        currentRoot[curChar] = {};
      }
      currentRoot = currentRoot[curChar];
    }
    //문자가 끝날때 sign
    currentRoot["*"] = currentWord;
  }
};

solution(list);

targetElement.addEventListener("input", (e) => {
  if (e.target) {
    resultElement.innerHTML = "";
    const val = e.target.value;
    const result = searchDFS(val);
    // console.log(val);
    // console.log('result : ', result);
    resultElement.innerHTML = result.join(", ");
  }
});
