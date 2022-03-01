/*
Given an array of integers nums and an integer target, return indices(:index 복수) of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * input : {number[]} nums, {number} target
 * output : {number[]}
 * constraints :
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * Only one valid answer exists.
 * Edgecase:
 *
 * brute force : for문2개 -> O(N^2),
 * time complexity >= O(N^2)
 * space complexity:
 * psuedo code:
 * [1,2,3,4,5..]
 *  i
 *    i+j
 * if(nums[i] + nums[i+j] === target)
 * answer.push(i);
 * answer.push(i + j);
 *
 * optimal solution
 * sorting ==> O(nlogn+)
 */

let n = [3, 2, 4];
let t = 6;

var twoSum = function (nums, target) {
  let answer = [];
  /*  brute force
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        answer.push(i);
        answer.push(j);
        break;
      }
    }
  }
  */

  /** optimal solution */
  // my fault : In hashTable, Each lookup in table costs Only O(1) time,
  //            i confused that hashtable lookup costs O(N) time like for-loop.
  //            so, i thought there's no reason to use hash table (key:value) because of same O(N) time like for-loop
  // time complexity : 1. O(2n) -> 2. O(n + 1) -> O(n)
  // space complexity : 1.2. O(n)

  /*2. step2
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    //nums's each element's value => key, num's element's index => value
    hashMap.set(nums[i], i);
  } //time : O(N) space : O(N)
  console.log(hashMap);
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashMap.has(complement) && hashMap.get(complement) !== i) {
      console.log("complement : ", complement);
      //condition : avoiding duplicate number for index calculation
      answer.push(i);
      answer.push(hashMap.get(complement));
      // "i" must be first, and then complement, cause must be Ascending.
      break;
      // break!
      // if not, nevertheless answer found, for-loop keep going, so answer must be duplicate.
      // Ex)  6 - 2 = 4, and also 6 - 4 = 2
    }
  } //time : O(N)
  */

  /* 3. step3 */
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    // console.log(`i : ${i}, hashMap.get(complement): ${hashMap.get(complement)}`);
    // console.log(hashMap);
    if (hashMap.has(complement)) {
      answer.push(hashMap.get(complement));
      answer.push(i);
      break;
    } else {
      hashMap.set(nums[i], i);
    }
  }
  return answer;
};

console.log(twoSum(n, t));
