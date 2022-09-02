/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

let nums = [1, 3, 5, 6];
// let target = 5;
// let target = 2;
let target = 7;

// 내답
// var searchInsert = function (nums, target) {
//   let min = 0;
//   let max = nums.length - 1;

//   while (min <= max) {
//     let mid = Math.floor((min + max) / 2);

//     let num = nums[mid];
//     if (num === target) return mid;
//     //같은게 없을때,
//     else if (min === max) {
//       if (nums[min] < target) return min + 1;
//       else if (nums[min] > target) {
//         return min;
//       }
//     } else if (num < target) {
//       if (min > nums.length - 1) return nums.length;
//       min = mid + 1;
//     } else if (num > target) {
//       if (max < 0) return 0;
//       if (max - min === 1) return min;
//       max = mid - 1;

//       console.log("test: max :", max, "min :", min);
//     }
//   }
// };

//모범답
/**
 * Key:
 * 이진탐색은 거의 마지막?에 min,max(=left,right) point 붙어있는 2요소가 남는데
 * 예를들어 [1],[2]가 남았을때 무조건 mid point는 (0+1)/2 내림으로 0이 되니 첫번째 인덱스, min 인덱스가 된다.
 *  타겟이 만약 [1] 보다 큰 수 라하면 nums[mid] < target 이니, min = mid+1이 된다. 그럼 min과 max가 같아지고, 해당값이 target이 아니라면,
 * 1. target이 작으면 min 앞에 오면 되니, min 인덱스를 return 시켜주면된다.
 * 2. target이 크면 max+1 값을 리턴 시켜주면 되는데 큰수가 타겟이면 min=max 까지 되기 때문에 min+1 === max+1 관계가 되므로, 이 경우도 min+1 계산을 로직상 해주므로
 * 1과 같이 min 인덱스를 return 시켜주면 된다.
 *
 * 핵심은 target === nums[mid] 경우를 제외하곤
 * 다 return min을 해주면 됨.
 * */
var searchInsert = function (nums, target) {
  let s = 0;
  let e = nums.length;
  let mid;
  while (s <= e) {
    mid = Math.floor((s + e) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (target > nums[mid]) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return s;
};

console.log(searchInsert(nums, target));
