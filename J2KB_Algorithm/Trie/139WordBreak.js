/**
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

let s = "a";
let wordDict = ["b"];
let Trie = {};

var wordBreak = function (s, wordDict) {
  buildTrie(wordDict);
  // console.log(JSON.stringify(Trie));
  let answer = searchInTrie(s);
  console.log('answer : ', answer)
  return answer;
};

function buildTrie(wordDict) {
  for (let i = 0; i < wordDict.length; i++) {
    let root = Trie;
    //이렇게 리스트 중에 요소 전달하면 좋음
    const currentWord = wordDict[i];
    for (let j = 0; j < currentWord.length; j++) {
      if (!root[currentWord[j]]) {
        root[currentWord[j]] = {};
      }
      root = root[currentWord[j]];
    }
    root["*"] = currentWord;
  }
}

function searchInTrie(target) {
  let root = Trie;

  for (let i = 0; i < target.length; i++) {
    const currentChar = target[i];
    if (root["*"]) {
      root = Trie;
    }
    // console.log(root, currentChar);

    if (!root[currentChar]) {
      console.log(root, currentChar);
      return false;
    }
    root = root[currentChar];
  }
  return true;
}

console.log(wordBreak(s, wordDict));
