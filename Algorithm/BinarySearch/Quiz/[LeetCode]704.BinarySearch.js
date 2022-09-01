/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/* 
time complexity : O(log n)
constraint : 중복 x
nums 배열 내 오름차순 정렬
keyPoint : while문 써도 되는데 굳이 재귀로 했네 ;;


Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
// let nums = [-1,0,3,5,9,12];
// let target = 2;

//NOTE: 모범 답
//key: 바이너리 서치는 mid 중간 idx를 구한뒤 중간 값과 target과 비교하면서
// target 이 크면 min을 mid+1로 target이 작으면 max를 mid -1로 두고 
//min이 max를 넘을때까지 계속 while문을 돌려 찾는 원리다
var search = function(nums, target) {
  let mid = -1;
  let min = 0;
  let max = nums.length;
  
  while(min<=max){
      const mid = Math.floor((min+max)/2);
      const num = nums[mid];
      if(target===num){
          return mid;
      } else if(num<target){
          min = mid+1;
      }else if(num>target){
          max = mid-1;
      }else {
          return -1;
      }
  }
return mid;
};

console.log(search(nums, target));



//NOTE:내 답: 겨우 품..
/* var search = function (nums, target) {
  const val = BS(0, nums.length - 1);
  return val;

  function BS(startIdx, endIdx) {
    let rVal = -1,
      lVal = -1;
    let middle = Math.floor((startIdx + endIdx) / 2);
    // console.log(startIdx, middle, endIdx);

    if (nums[middle] === target) {
      return middle;
    }

    if (startIdx === endIdx && nums[middle] !== target) return -1;

    if (nums[middle] < target) {
      rVal = BS(middle + 1, endIdx);
    }

    if (target < nums[middle]) {
      lVal = BS(startIdx, middle - 1);
    }

    if (rVal >= 0) return rVal;
    if (lVal >= 0) return lVal;
    return -1;
  }
};

console.log(search(nums, target));
 */