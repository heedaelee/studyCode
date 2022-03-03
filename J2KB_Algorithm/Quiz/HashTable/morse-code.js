/*
804. Unique Morse Code Words
Easy

Share
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.

Example 1:

Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".
Example 2:

Input: words = ["a"]
Output: 1
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 12
words[i] consists of lowercase English letters.
*/

/* NOTE: step 1.
  input : words : string []
  output : number
  constraints : 
    1 <= words.length <= 100
    1 <= words[i].length <= 12
    words[i] consists of lowercase English letters.
  edge case : "a-z", if  words.length === 1, then must be return 1

  brute force : 
    make hashTable => key:a-z, value:mos letter

    for loop =>make hashtable =>  each word -> mos letter :string -> put hashTable -> if duplicate , then count answer
  time complexcity : O(M + N^2) -> O(N^2)
  space complexcity : O(M + N) -> O(M)
*/

/**
 * @param {string[]} words
 * @return {number}
 */

//input
let words = ["gin", "zen", "gig", "msg"];
// let words = ["a"];

//NOTE: brute force

// var uniqueMorseRepresentations = function (words) {
//   let answer = 0;
//   const mos = [
//     ".-",
//     "-...",
//     "-.-.",
//     "-..",
//     ".",
//     "..-.",
//     "--.",
//     "....",
//     "..",
//     ".---",
//     "-.-",
//     ".-..",
//     "--",
//     "-.",
//     "---",
//     ".--.",
//     "--.-",
//     ".-.",
//     "...",
//     "-",
//     "..-",
//     "...-",
//     ".--",
//     "-..-",
//     "-.--",
//     "--..",
//   ];
//   let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//   let mosHashMap = new Map();
//   let answerHashMap = new Map();

//   for (let i = 0; i < mos.length; i++) {
//     mosHashMap.set(alphabet[i], mos[i]);
//   }
//   for (let x of words) {
//     let str = "";
//     for (let y of x) {
//       str += mosHashMap.get(y);
//     }

//     answerHashMap.set(str, x);
//     answer = answerHashMap.size;
//   }

//   return answer;
// };

//NOTE: optimal solution (1)

 var uniqueMorseRepresentations = function(words) {
  const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  //FIXME: 1. 알파벳을 배열로 할필요 없이 긴 string으로 두고, indexOf(문자) 를 활용해 알파벳에 따른 index를 추출해 올 수 있다
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const trans = [];
  
  if(words.length === 1) {
      return 1;
  } else {
      for(let i = 0; i < words.length; i++) {
          let morseCode = "";
          for(let j = 0; j < words[i].length; j++) {
              const morseIndex = alphabets.indexOf(words[i][j]);
              morseCode += morse[morseIndex];
            }
            trans.push(morseCode);
            console.log(trans)
      }
  }
  //FIXME: 2. 새로운 해쉬맵을 새로 만들 필요 없이, trans란 배열에 push해서 중복값 넣고, new Set(trans)를 통해 중복을 제거 해 줄수 있다. 
  return new Set(trans).size;
};

console.log(uniqueMorseRepresentations(words));
