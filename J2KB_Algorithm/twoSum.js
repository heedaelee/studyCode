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
      }
    }
  }
  */
  /** optimal solution */
  nums.sort((next, prev) => next - prev);
  for (let i = 0; i < nums.length - 1; i++) {
    console.log(nums[i]);
    if (nums[i] + nums[i + 1] === target) {
      answer.push(i);
      answer.push(i + 1);
      break;
    }
  }

  return answer;
};

console.log(twoSum(n, t));
