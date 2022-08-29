/*
 *  mergedSort 함수는 주어진 배열을 정렬하고
 *  요소가 2개 이하가 될 때 까지 배열을 재귀적으로 나누고, 분할된 배열을 재귀적으로 정렬한다.
 *  mergeSort : O(log N) => 재귀니까.
 */
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle)); //slice -> startIndex, endIndex // 1차 left부분 재귀
  let right = mergeSort(arr.slice(middle)); // 2차 right부분 재귀

  return merge(left, right);
}

//merge : 오름(내림) 차순으로 정렬해서 새로운 array에 넣는 함수
// O(3N => N) while3번 N + N + N,    //NOTE: 따라서 두 함수 동시에 일어나니 시간 복잡도는  N * log N
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  // 투포인터 방법 :  i , j, i,j인덱스 계산후 새로운 array에 push
  //left right 2개 배열 아직 인덱스가 덜 돌았으면(#27행), 두 배열 요소별 크기를 비교하여(#24행),
  //작은 수부터 push를 하여 넣는다 -> while문, 오름차순 정렬됨
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  //만약 left 배열이 남아 있으면...
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  //만약 right 배열이 남아 있으면...
  while (j < arr2.length) {
    result.push(arr2[i]);
    j++;
  }
  return result;
}

let input = [4, 3, 2, 1];
console.log(mergeSort(input));
