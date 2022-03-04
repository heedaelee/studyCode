/**
 * You are given a string s. Reorder the string using the following algorithm:

Pick the smallest character from s and append it to the result.
Pick the smallest character from s which is greater than the last appended character to the result and append it.
Repeat step 2 until you cannot pick more characters.
Pick the largest character from s and append it to the result.
Pick the largest character from s which is smaller than the last appended character to the result and append it.
Repeat step 5 until you cannot pick more characters.
Repeat the steps from 1 to 6 until you pick all characters from s.
In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.

 

Example 1:

Input: s = "aaaabbbbcccc"
Output: "abccbaabccba"
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
Example 2:

Input: s = "rat"
Output: "art"
Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.
 

Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters.

NOTE:
input : s:string,
output : string
constraint: 
  1 <= s.length <= 500
  s consists of only lowercase English letters.
edge case : 

brute force:
  hashTable : {
    a:0
    b:..
  }
  keys -> string. sort()
  hashTable.get() -> make answer.
  if(no value) -> return answer

  n = s.length
  m = keys.length
  time : O(m log m + n^2)
  space : O(n + m)
 * 
 */

/**
 * @param {string} s
 * @return {string}
 */

let s = "aaaabbbbcccc";
// let s = "rat";

var sortString = function (s) {
  let answer = "";
  let hT = new Map();
  let keys = "";
  let cnt = s.length;

  for (let x of s) {
    if (hT.has(x)) {
      hT.set(x, hT.get(x) + 1);
    } else {
      hT.set(x, 1);
      keys += x;
    }
  }
  keys = keys.split("").sort();

  while (cnt > 0) {
    for (let j = 0; j < keys.length; j++) {
      if (hT.has(keys[j]) && hT.get(keys[j]) !== 0) {
        answer += keys[j];
        hT.set(keys[j], hT.get(keys[j]) - 1);
        cnt--;
      }
    }

    for (let l = keys.length - 1; l >= 0; l--) {
      if (hT.has(keys[l]) && hT.get(keys[l]) !== 0) {
        answer += keys[l];
        hT.set(keys[l], hT.get(keys[l]) - 1);
        cnt--;
      }
    }
  }
  return answer;
};

console.log(sortString(s));
