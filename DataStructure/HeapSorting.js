/**
 * 출 : https://www.youtube.com/watch?v=iyl9bfp_8ag
 * 이 코드는 (오름차순) 힙 정렬을 구현하는 코드이다.
 *
 * 핵심 :
 * root룰 child에 할당하는건, (c =root)
 * (트리에서) 위로 올라가는거고
 * child를 root에 할당하는건, (root = c)
 * 밑으로 내려가는 것이다.
 *  */

const number = 9;
const heap = [7, 6, 5, 8, 3, 5, 9, 1, 6];

function main() {
  //1. 먼저 전체 트리 구조를 => 최대힙 구조로 바꿉니다(오름차순 구현이니까 최대값 찾기!, 내림차순이면 최소힙을 찾아야..)
  for (let i = 1; i < number; i++) {
    //루트가 0이어서 do-while 탈출했다면, 여기서 c값 +1후 재할당
    let c = i;

    //do-while : 부모가 있다면 자식 값과 부모값을 비교하는 로직
    do {
      //NOTE: 2진트리에서,
      //child(c)의 root(부모) 구하는 방법 root = (c -1)/2 이면 루트 idx를 구할 수 있다.
      let root = Math.floor((c - 1) / 2);
      //자식노드가 루트노드보다 더 크다면
      if (heap[root] < heap[c]) {
        // swap
        let temp = heap[root];
        heap[root] = heap[c];
        heap[c] = temp;
      }
      //NOTE: c= root는 올라가는 방법임. cild 인덱스가 -> root 인덱스값을 할당받았으니 논리적으로 트리에서 올라가는 뜻
      //(swap을 하든 안하든)swap단계를 지냈으니 아들(c->child뜻인가보당)에서 루트 인덱스로 올라가야함. 할당을 통해
      c = root;
      //root가 0이면 child 0이되고, 그 뜻은 더이상 root(부모)가 없다는 뜻이므로 do-while 탈출해야함
    } while (c !== 0);
  }

  //2. 크기를 줄여가며(=올림차순이니 최대값부터 배열에 들어가니 힙 크기는 1개씩 줄어든다는 의미)
  //반복적으로 힙을 구성
  for (let i = number - 1; i >= 0; i--) {
    // 2-1 가장 위의 root값을 맨뒤로 보내줘야함. 그래야 오름차순 정렬이 이뤄지므로
    let temp = heap[0];
    heap[0] = heap[i];
    heap[i] = temp;
    //then, 가장 큰 값이 맨 뒤로 감
    let root = 0;
    let c = 1;
    do {
      //NOTE: 2진트리에서,
      //자식 구하는 방법 2 * root + 1 이면 첫째 자식 idx를 구할 수있다.(둘째는 idx + 1)
      c = 2 * root + 1;
      //자식 중에 더 큰 값을 찾기
      //만약 heap[c] < heap[c+1]이라면 c에서 오른쪽으로 +1 index를 옮겨준다,
      // 범위 제한도 필요한데, 최대 인덱스가 i-1보다 적도록 한다.
      if (heap[c] < heap[c + 1] && c < i - 1) {
        c++;
      }
      //루트보다 자식이 더 크다면  자식과 교환
      if (heap[root] < heap[c] && c < i) {
        let temp = heap[root];
        heap[root] = heap[c];
        heap[c] = temp;
      }
      //NOTE: root = c 는 내려가는 방법임.
      //child가 root가 된거니, 논리적으로 내려가는 방법
      root = c;
    } while (c < i); //자식 idx가 미 완료된, 즉 전체 for문의 i보다 더 작을때만 조건 돌기. 크면 탈출, 참고:  c >i 는 뜻은 현재 자식 포인트가 정렬안된 배열 요소 총 갯수(i)를 증가한다는 말 = 자식이 없다는 말이다. 그래서 탈출
  }
}

main();
console.log(heap);
