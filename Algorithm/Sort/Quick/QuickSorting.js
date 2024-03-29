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

// const array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
const array = [16, 1, 0, 9, 100];
const number = array.length;

function quickSorting(data, start, end) {
  // NOTE:miss point
  // if (end <= 0 || number <= start) return;
  // NOTE: constraint condition 중요!
  // start는 피벗, 즉 피벗은 0번 인덱스이므로, end도 0번 인덱스로 같다면 아래 로직을 탈 필요가 없다.
  if (end <= start) {
    // console.log(`start : ${start}, end : ${end}, pivot : ${start}`);
    return;
  }

  let i = start + 1;
  let j = end;
  let pivot = start;

  console.log(data);
  console.log(`p: ${pivot} i: ${i} j: ${j} `);

  //i<j 뜻은 i j 순서가 안바뀜.
  // i가 피벗보다 큰수 인덱스고, j가 작은수 인덱스 이므로, 즉 아직 정렬할게 남아 있다는 뜻
  while (i <= j) {
    console.log("탄다");
    //잘못됨 : i < number -1이 되면 안되고 -> i <= end 가 되야함.
    //반복된 재귀로 start랑 end범위는 고정이 아니라 계속 변하니 number값으로 기준이 되면 안되고,
    // start, end 기준으로 범위를 설정해야 하는데, number 값으로 정하는 miss 가 일어남
    // i < j && 정해줘도 되는데 어차피 while조건에 있기에 굳이 적을필요 없어서 생략
    while (i <= end && data[i] <= data[pivot]) {
      i++;
    }

    //이건 잘했네. (pivot < )pivot 기준 이라서 결국 pivot=start이니
    //.. 즉 적어도 두 블록은 있어야 된다. 그말은 j인덱스는 pivot 인덱스보다 1이라도 커야 한다는 뜻.
    while (pivot < j && data[pivot] <= data[j]) {
      j--;
    }

    //엇갈린 상태면
    if (i > j) {
      const tmp = data[j];
      data[j] = data[pivot];
      data[pivot] = tmp;
    } else {
      //엇갈리지 않은 상태면
      const tmp = data[i];
      data[i] = data[j];
      data[j] = tmp;
    }
  }

  //swap후, 작은수 j의 왼쪽,
  //swap 후에 왼쪽 블록을 만들때,  swap전 pivot 인덱스가 start 인덱스로 되어야 한다.
  quickSorting(data, pivot, j - 1);
  //j의 오른쪽
  //swap 후에 오른쪽 블록을 만들때, swap전 j인덱스랑 pivot이랑 스왑을 했으니
  // j+1인덱스가 start 인덱스로, end인덱스는 전체 배열의 마지막 인덱스가 아닌, 이전의 end인덱스가 끝이 되어야 한다.
  // quickSorting(data, j + 1, number - 1); //영역 틀린 코드
  quickSorting(data, j + 1, end);

  console.log("answer : ");
  return data;
}

console.log(quickSorting(array, 0, number - 1));
