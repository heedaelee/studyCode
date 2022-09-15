// n	return
// 118372	873211

let n = 118372;

const result = solution(n);
console.log(result);

function solution(n) {
  function dfs(data, start, end) {
    // NOTE: 주의 1. return 정지!
    if (end <= start) return;

    console.log(data, start, end);
    let pV = start;
    let left = start + 1;
    let right = end;

    console.log(`p: ${pV} Left: ${left} right: ${right} `);

    //내림차순
    while (left <= right) {
      // NOTE: 주의 2. while문 범위!
      while (left <= end && data[left] <= data[pV]) {
        left++;
      }
      // NOTE: 주의 2. while문 범위!
      while (right > pV && data[right] >= data[pV]) {
        right--;
      }
      //String 은 구조분해 단순화 처럼 swap 안됨
      // [data[left], data[right]] = [data[right], data[left]];

      //pivot과 swap
      if (left > right) {
        console.log("before swap : ", data);
        console.log("left : ", left, "right : ", right);
        data = swap(data, pV, right);
        console.log("data : ", data);
      } else {
        data = swap(data, left, right);
      }
    }

    dfs(data, start, right - 1);
    dfs(data, right + 1, end);
    return data;
  }

  function swap(arr, first, last) {
    arr = arr.split(""); //to array
    var temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    arr = arr.join("").toString(); //to string
    return arr;
  }

  let str = String(n);

  let result = dfs(str, 0, str.length - 1);
  let answer = Number(result);

  return answer;
}
