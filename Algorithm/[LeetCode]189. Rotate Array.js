/* 
Given an array, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let nums = [-1, -100, 3, 99];
let k = 3;

var rotate = function (nums, k) {
  let len = nums.length;

  k = k % len;

  nums.reverse();

  reverseArr(0, k - 1);
  reverseArr(k + 1, len - 1);

  function reverseArr(start, end) {
    while (start < end) {
      [nums[end], nums[start]] = [nums[start], nums[end]];
      start++;
      end--;
    }
  }
};

rotate(nums, k);

console.log(nums);
