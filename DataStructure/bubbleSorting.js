/**
 * 오름 차순으로 만들기
 * 시간 복잡도 : n^2
 *
 *
 * 방뻐 : 전체 for문은 전체 수열을 몇번을 돌게 할것인가? 를 구현하는
 * for문이다. 전체 숫자가 10개니까 전체 cycle이 9번은 돌아야 한다.
 * 마지막 순서 앞자리 1만 남는건 돌필요 없고 뒤에서 9,8,7...2까지 돌면서 만들어야
 * 하므로..
 *
 * 그럼 전체 도는 for문은 완성됐고, 내부에선 만약 for문 인덱스가 i면
 * i랑 i+1이랑 swap하는 루프를 구성해야 한다.
 * 그런데 버블 정렬의 중요한 조건은 정렬이 완성된 뒤에 제외해줘야 한다.
 * 따라서 1회전에 array[9]에 10, 2회전에 array[8]의 9는 for문에서 제외
 * 되어야 하므로,
 * 총 요소의 갯수 - 1 에서 -0, -1, -2씩 i가 돌때마다 커져야 하므로
 * i인덱스를 활용해주면 된다.
 * 그렇게 활용한 조건 종료 식이 number -1 -i => number -(1+i)
 * 로 될수 있다.
 *
 * 버블 애니메이션 :
 * https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=justant&logNo=20204028286
 */

const number = 10;
const array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

function bubbleSort() {
  for (let i = 0; i < number - 1; i++) {
    for (let j = 0; j < number - (1 + i); j++) {
      if (array[j + 1] < array[j]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort());
