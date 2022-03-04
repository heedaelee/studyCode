/*Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/

/** 
 * input :  array [] : number
 * output : number
 * constraints : 
    1 <= nums.length <= 100
    1 <= nums[i] <= 100
  edge case : if nums.length === 1, then output must be 0

  brute force : solution : {
    make hashmap -> key : num[index], value : index, 
    if(i < j && nums[i]=== nums[j]){
      cnt++
    }
    return cnt
  }
  time plexcity: O(n + )
  space plexcity : O()

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

let n = [1, 2, 3, 1, 1, 3];
// let n = [1,1,1,1];
//  let n = [1,2,3];

//굳이 해쉬테이블 안만들어도 됨 ㅠㅠ
// var numIdenticalPairs = function (nums) {
//   let answer = 0;
//   let hashMap = new Map();
//   let keys = [];

//   for (let i = 0; i < nums.length; i++) {
//     let arr = [];
//     if (hashMap.has(nums[i])) {
//       hashMap.get(nums[i]).push(i);
//     } else {
//       arr.push(i);
//       hashMap.set(nums[i], arr);
//       keys.push(nums[i]);
//     }
//   }
//   for (let i = 0; i < keys.length; i++) {
//     let arr = hashMap.get(keys[i]);
//     if (arr.length > 1) {
//       for (let j = 0; j < arr.length; j++) {
//         for (let l = j; l < arr.length; l++) {
//           if (arr[j] < arr[l]) {
//             answer++;
//           }
//         }
//       }
//     }
//   }
//   return answer;
// };

/* optimal solution
psuedo code
결국 인덱스 계산하라는거, 해쉬테이블 없어도.. 인덱스만 계산해주면되는데 이상하게 어렵게 생각했네.

make double for loop -> first for loop index :i, second :j = i+1 
so always i<j
and then, if(nums[i] === nums[j]) answer++;
*/

var numIdenticalPairs = function (nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) answer++;
    }
  }

  return answer;
};

console.log(numIdenticalPairs(n));
