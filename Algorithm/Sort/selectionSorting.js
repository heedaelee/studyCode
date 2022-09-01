/**
 * 오름 차순으로 만들기
 * 시간 복잡도 : n^2
 *
 *
 * 셀렉션 소트 : 최소값/최대값 찾아서 앞부터 선택해 넣는것
 *
 * 방법 :
 * 외부 for문 1개는 계속 반복 시켜 주는거
 * 내부 for문 1개는 최소값 찾는것
 * 그 후 배열에 넣기
 */

const number = 10;
const array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

function InsertionSorting() {
  //전체 반복 돌려주는 for문
  for (let i = 0; i < number; i++) {
    //최소값과 인덱스
    let min = 0;
    let minIdx = 0;

    min = 9999;
    //최소값 찾기
    for (let j = i; j < number; j++) {
      //첫번째는 최소값 인덱스랑 값 변수에 무조건 할당
      //NOTE:이렇게 안해도 최소값을 큰수로  min = 9999 넣어줘도 되겠다.
      // if (i === j) {
      //   min = array[j];
      //   minIdx = j;
      //   continue;
      // }

      //두번째부턴 적으면 할당
      if (array[j] < min) {
        min = array[j];
        minIdx = j;
      }
    }

    // 찾은 최소값은 인덱스를 활용해, 앞의 선택된 배열의 자리부터 데이터 swap
    const temp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = temp;

    console.log(array);
  }

  console.log("최종 : ");
  return array;
}

console.log(InsertionSorting());
