function binarySearch(arr, target) {
  let leftIdx = 0;
  let rightidx = arr.length - 1;

  while (leftIdx <= rightidx) {
    let midIdx = Math.floor(leftIdx + (rightidx - leftIdx) / 2);

    // console.log(midIdx);
    if (target > arr[midIdx]) {
      leftIdx = midIdx + 1;
    } else if (target < arr[midIdx]) {
      rightidx = midIdx - 1;
    }
  }
  if (arr[leftIdx] - target > target - arr[rightidx]) {
    return arr[rightidx];
  }
  if (arr[leftIdx] - target < target - arr[rightidx]) {
    return arr[leftIdx];
  }
  if (arr[leftIdx] - target === target - arr[rightidx]) {
    return [arr[rightidx], arr[leftIdx]];
  }
}

//가장 가까운 수 찾기?
let target = 13;
let array = [1, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16];

//0, 10 arr[5] -> 9
// 6, 10,  arr[8]->12
// 9 , 10 arr[9] -> 15
// 9,

console.log(binarySearch(array, target));

/* 수식 풀이
1 2 3 4 5 6

(left + right) /2 = left + (right - left)/2;
                  why?
                  = left + 1/2 right - 1/2 left
                  = 1/2left + 1/2right
                  = (left + right)/2
*/
