/**
 * 출 : https://www.youtube.com/watch?v=iyl9bfp_8ag
 * 이 코드는 (오름차순) 힙 정렬을 구현하는 코드이다.
 *
 * 핵심 :
 * root룰 child에 할당하는건, (c =root)
 * (트리에서) 위로 올라가는거고
 * child를 root에 할당하는건, (root = c)
 * 밑으로 내려가는 것이다.
 *
 * time complexcity :
 * space complexcity :
 *  */

const number = 9;
const heap = [7, 6, 5, 8, 3, 5, 9, 1, 6];

function main() {
  //1. 오름차순을 위해 최대힙 구조를 만든다
  console.log("1번");
  for (let i = 1; i < number; i++) {
    let childIdx = i;
    do {
      const rootIdx = Math.floor((childIdx - 1) / 2);
      // console.log(`childIdx : ${childIdx}, rootIdx : ${rootIdx}`);
      if (heap[rootIdx] < heap[childIdx]) {
        // console.log("swap");
        const temp = heap[rootIdx];
        heap[rootIdx] = heap[childIdx];
        heap[childIdx] = temp;
      }
      childIdx = rootIdx;
    } while (childIdx !== 0);
  }

  console.log("2번");
  // 2. 최대힙 구조에서 마지막 인덱스랑 스왑한다.
  for (let i = number - 1; i > 0; i--) {
    let lastIdx = i;
    let rootIdx = 0;
    let childIdx = 1;

    const temp = heap[rootIdx];
    heap[rootIdx] = heap[lastIdx];
    heap[lastIdx] = temp;

    do {
      childIdx = 2 * rootIdx + 1;
      // NOTE: Miss :오른쪽 자식은 ++ 를 탈수 없게
      // 제약 조건을 (childIdx+1) < lastIdx 로 걸어야 함.
      if (
        childIdx + 1 < lastIdx &&
        heap[childIdx] < heap[childIdx + 1]
      ) {
        childIdx++;
      }

      if (heap[rootIdx] < heap[childIdx] && childIdx < lastIdx) {
        const temp = heap[rootIdx];
        heap[rootIdx] = heap[childIdx];
        heap[childIdx] = temp;
      }
      rootIdx = childIdx;
    } while (childIdx < lastIdx);
  }

  console.log(heap);
}

main();
// console.log(heap);
