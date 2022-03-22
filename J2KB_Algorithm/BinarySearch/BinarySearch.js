function binarySearch(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor(leftIdx + (rightIdx - leftIdx) / 2); // safe or guarded
    if (arr[midIdx] === target) {
      return midIdx;
    } else if (arr[midIdx] < target) {
      leftIdx = midIdx + 1;
    } else {
      rightIdx = midIdx - 1;
    }
  }
}

// let target = 6;
// let array = [1, 2, 3, 4, 5, 6, 10];

//가장 가까운 수 찾기?
let target = 13;
let array = [1, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16];

console.log(binarySearch(array, target));

/* 수식 풀이
1 2 3 4 5 6

(left + right) /2 = left + (right - left)/2;
                  why?
                  = left + 1/2 right - 1/2 left
                  = 1/2left + 1/2right
                  = (left + right)/2
*/
