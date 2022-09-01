/**
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

let s = "leetcode";
let wordDict = ["leet", "code"];

class Trie {
  keys = {};
  isWord = false;
  constructor(keys = {}, isWord = false) {
    this.keys = keys;
    this.isWord = isWord;
  }
  //계속 반복
  insertWord(word, trie) {
    if (!word.length) return;
    let letter = word[0];
    if (!trie.keys[letter]) {
      trie.keys[letter] = new Trie();
    }
    let newWord = word.slice(1);
    if (!newWord.length) {
      trie.keys[letter].isWord = true;
    } else {
      this.insertWord(newWord, trie.keys[letter]);
    }
  }
}

var wordBreak = function (s, wordDict) {
  let trie = new Trie();
  let result = false;
  let memo = {};

  //build Trie
  wordDict.forEach((word) => trie.insertWord(word, trie));

  //주어진 string 처리함수, 
  //if string given all exists in Trie build, return true. if not, return false
  const handleString = (str, trie) => {
    if (!str.length) {
      return (result = true);
    } else if (result || !trie || str in memo) {
      return;
    }
    memo[str] = "checked";
    let current = trie;
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];

      if (!current || !current.keys[letter] || result) {
        return;
      } else if (current.keys[letter].isWord && !result) {
        //주어진 1개 letter가 단어의 끝이고 && 끝이 나지 않았을때(->result===false)
        handleString(str.slice(i + 1), trie);
        //파라미터 slice 는 주어진 문자열 인덱스 + 1 부터 slice해서 handleString() 진행하라는 뜻임.
      }
      //끝이 나지 않았고, 주어진 letter가 단어의 끝도 아닐때 -> 현재 단어의 주소값을 current 변수에 할당
      current = current.keys[letter];
    }
  };

  handleString(s, trie);
  return result;
};

console.log(wordBreak(s, wordDict));
