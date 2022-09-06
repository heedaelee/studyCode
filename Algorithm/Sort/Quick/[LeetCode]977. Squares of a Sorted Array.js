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
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }

  // console.log(nums);

  //quickSorting
  let left = 0,
    right = nums.length - 1;
  quick(left, right);

  function quick(pivotI, end) {
    //NOTE: 이게아니라 여기가 중요, 재귀에서 제약은 함수 상단에 조건으로 걸어줘야 됨.
    // if (nums.length - 1 <= i || j < 0) return;
    if (end <= pivotI) return;

    console.log(nums);

    let i = pivotI + 1;
    let j = end;
    //실수 : <= 같거나 작아야지 i보다,

    // while (i <= j) {
    //이게 아니라
    while (i <= j) {
      //초과해야지.. 피벗보다 큰수 찾기, 인덱스 I
      while (i <= end && nums[i] < nums[pivotI]) {
        i++;
      }
      //피벗보다 작은수 찾기, 인덱스 J는 항상 pivot인덱스보다 커야 된다 최소 숫자 2개는 있어야 j--가 가능
      while (pivotI < j && nums[j] > nums[pivotI]) {
        j--;
      }

      //엇갈린 상태면
      if (j > i) {
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        //엇갈리지 않은 상태면
      } else {
        let tmp = nums[pivotI];
        nums[pivotI] = nums[j];
        nums[j] = tmp;
      }
    }

    quick(pivotI, j - 1);
    quick(j + 1, end);
  }

  console.log(nums);
  return nums;
};

sortedSquares(nums);
