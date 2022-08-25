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

let counter = 0;

function quickSorting(data, start, end) {
  // if (end <= 0 || number <= start) return;
  counter++;
  if (end <= start) {
    console.log(`start : ${start}, end : ${end}`);
    return;
  }

  let i = start + 1;
  let j = end;
  let pivot = start;

  //i<j 뜻은 i j 순서가 안바뀜. 즉 아직 정렬할게 남아 있다는 뜻
  while (i < j) {
    while (i < number - 1 && data[i] <= data[pivot]) {
      i++;
    }

    while (pivot < j && data[pivot] <= data[j]) {
      j--;
    }

    // 큰수가(i) 작은수(j) 보다 왼쪽에 있을때
    if (i < j) {
      const tmp = data[i];
      data[i] = data[j];
      data[j] = tmp;
    }
  }
  // 큰수가(i) 작은수(j) 보다 오른쪽에 있을때,
  // 정렬이 다 되었으니 작은수 인덱스랑 pivot 인덱스랑 스왚
  const tmp = data[j];
  data[j] = data[pivot];
  data[pivot] = tmp;
  //swap후, 작은수 j의 왼쪽,
  //swap 후에 왼쪽 블록을 만들때,  swap전 pivot 인덱스가 start 인덱스로 되어야 한다.
  quickSorting(data, pivot, j - 1);
  //j의 오른쪽
  //swap 후에 오른쪽 블록을 만들때, swap전 j인덱스랑 pivot이랑 스왑을 했으니
  // j+1인덱스가 start 인덱스로, end인덱스는 전체 배열의 마지막 인덱스가 아닌, 이전의 end인덱스가 끝이 되어야 한다.
  // quickSorting(data, j + 1, number - 1); //영역 틀린 코드
  quickSorting(data, j + 1, end);

  return data;
}

console.log(quickSorting(array, 0, number - 1));
console.log(`함수 호출 횟수 : ${counter}`);
