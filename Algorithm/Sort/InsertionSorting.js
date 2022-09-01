/**
 * 오름 차순으로 만들기
 * 시간 복잡도 : n^2
 *
 *
 * 방법 :
 * 전체 for문은 0부터 n-1까지 돌고,
 * n+1과 비교해 작으면 계속 왼쪽으로 가서 작지 않을때까지 이동
 */

const number = 10;
const array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

function InsertionSorting() {
  for (let i = 0; i < number - 1; i++) {
    console.log(i);
    let idx = i;

    while (array[idx + 1] < array[idx]) {
      // if (array[index] <= array[ + 1]) {
      //   break;
      // }
      //swap
      const temp = array[idx];
      array[idx] = array[idx + 1];
      array[idx + 1] = temp;
      idx--;
    }
  }

  return array;
}

console.log(InsertionSorting());
