/*
Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
*/

let nums = [-4, -1, 0, 3, 10];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  //square
  for (let i = 0; i < nums.length - 1; i++) {
    nums[i] = nums[i] * nums[i];
  }

  //quickSorting
  let left = 0,
    right = nums.length - 1;
  quick(left, right);

  function quick(pivotI, end) {
    let i = pivotI + 1;
    let j = end;
    if (nums.length - 1 < i || j < 0) return;

    while (i <= j) {
      while (i < end && nums[i] < nums[pivotI]) {
        i++;
      }
      while (pivotI < j && nums[j] > nums[pivotI]) {
        j--;
      }

      let tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
    }
    let tmp = nums[pivotI];
    nums[pivotI] = nums[j];
    nums[j] = tmp;

    quick(pivotI, j - 1);
    quick(j + 1, end);
  }

  console.log(nums);
  return nums;
};

sortedSquares(nums)