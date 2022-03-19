/*
 
NOTE:
input :array [][] : number
output : array [][] : number
constraints : 
edge Case : array[i][j] ->  0 <= j <= 100

question explation : should be calculated with 
                    index number student's top five average

brute force : solution () => {
 
 make hashTable {1:[], 2:[]}
 2 arrays sort [].sort();
 for loop -> caclculate top 5 index average 
}

전체 갯수 n, key 갯수 m

time complexcity : O(n^2 + 2n log n + 10 ) => O(n^2)
                   수정 : O( n + m * n log n + 5m ) => O(m * n log n)
space complexcity : O(5 + n) => O(n)


*/

let pointArray = [
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76],
];
// let pointArray = [
//   [1, 100],
//   [7, 100],
//   [1, 100],
//   [7, 100],
//   [1, 100],
//   [7, 100],
//   [1, 100],
//   [7, 100],
//   [1, 100],
//   [7, 100],
// ];

function solution(pA) {
  let answer = [];
  let hashTable = new Map();

  /** 1. 해쉬테이블 형태로 만들기 */
  for (let i = 0; i < pA.length; i++) {
    //BUG:[주의]for문을 2번 탈 필요가 없음, j인덱스 사용할 필요가 없잖아!!!, [i][j]에서 j를 순회할 필요가 없음, j의 사용할 인덱스가 고정적이라 인지 가능하다면 이중 array 가로행은 for문 돌릴 필요가 x
    // for (let j = 0; j < pA[i].length; j++) {
    if (!hashTable.has(pA[i][0])) {
      let array = [];
      array.push(pA[i][1]);
      hashTable.set(pA[i][0], array);
    } else {
      hashTable.get(pA[i][0]).push(pA[i][1]);
    }
    // }
  } //time : n
  //space : n

  /** 2. 해쉬테이블 배열 형태의 value 들을 오름차순으로 정렬 */
  for (let x of hashTable.keys()) {
    hashTable.get(x).sort((a, b) => b - a);
  }
  //time : m * n log n

  /** 3. 정렬된 숫자 5개로 평균 만든 후 새로운 해쉬테이블에 삽입, 평균구하고 key, value  => 2차원 배열 형태로 삽입 */
  //hashTable에서 let of 로 [key, value] 사용법 기억해야..
  for (let [key, value] of hashTable) {
    let innerArr = [];
    let number = 0;
    for (let j = 0; j < 5; j++) {
      number += value[j];
    }
    innerArr.push(key);
    innerArr.push(Math.floor(number / 5));
    answer.push(innerArr);
  }
  //time : 5 * m
  //space : 5


  // 2차원 배열 만드는 법 공부 :js
  return answer;
}

console.log(solution(pointArray));
