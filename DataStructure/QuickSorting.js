/**
 * 오름 차순으로 만들기
 * 시간 복잡도 : n * log n
 *
 *
 * 방법 :  
0. 리스트의 첫번째 원소를 가리키는 Left 포인터와 리스트의 마지막 원소를 가리키는 Right 포인터 사용
1. 리스트에서 Pivot (무작위 원소)를 하나 선택
2. Pivot 보다 큰 원소를 만날 때까지 Left 포인터를 오른쪽으로 이동시킴
3. Pivot 보다 작거나 같은 원소를 만날때까지 Right 포인터를 왼쪽으로 이동시킴
4. 두 포인터가 멈추면 해당 위치에 있는 원소를 교환함
5. Right 포인터가 Left 포인터의 왼쪽에 위치할 때까지 2번 과정부터 반복
6. Right 포인터의 위치를 Pivot 의 위치로 설정하고 Right 포인터 위치에 있던 원소는 Pivot 이 있던 위치로 이동시킴
7. 두 포인터가 만난 곳을 기준으로 리스트를 두개의 서브 리스트로 나눔
8. 모든 원소가 정렬될 때까지 각 서브 리스트에 대해 0번 과정부터 반복
 */

const number = 10;
const array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
let pivotP = 0,
  leftP = 0;
let rightP = array.length - 1;

function quickSorting(pivotP, leftP, rightP) {
  
  if (rightP < 0 || leftP < 0 || pivotP < 0) return;
  //피벗보다 큰 값 찾기, leftP, (leftP == 큰값 이다!)
  for (let i = leftP; i <= rightP; i++) {
    leftP = i;
    if (array[pivotP] < array[leftP]) {
      break;
    }
  }

  //피벗보다 작은 값 찾기, rightP, (rightP == 작은값 이다!, 헷갈림 주의)
  for (let i = rightP; pivotP <= i; i--) {
    rightP = i;
    if (array[rightP] <= array[pivotP]) {
      break;
    }
  }

  //큰값 포인터가 작은값 포인터보다 작으면 (=> leftP < rightP ), 작은 값이 뒤에 있다는 뜻이므로 작은값 큰 값 Swap,
  //피벗이 바뀌면 안되지. 그니까 pivot 값 고정하고 재귀돌리고..
  if (leftP < rightP) {
    const temp = array[leftP];
    array[leftP] = array[rightP];
    array[rightP] = temp;
    //반복, 재귀로, pivot값은 똑같이..
    //NOTE: 여기서 다시
    quickSorting(pivotP);
  } else {
    //큰값 포인터가 작은값 포인터보다 크면 정렬 완료된 것이므로, 피벗과 작은값을 swap한다
    //
    const temp = array[rightP];
    array[rightP] = array[pivotP];
    array[pivotP] = temp;
    //swap 한 right 인덱스 값의 왼쪽 블록
    quickSorting(pivotP, pivotP, rightP - 1);
    //swap 한 right 인덱스 값의 오른쪽 블록
    quickSorting(leftP, leftP, array.length - 1);
  }

  return array;
}

console.log(quickSorting(pivotP, leftP, rightP));
