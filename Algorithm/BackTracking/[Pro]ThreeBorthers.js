//문제 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/131705

//입출력 예

const number = [-2, 3, 0, 2, -5]; //result =>2
// const number = [-3, -2, -1, 0, 1, 2, 3]; //result =>5
// const number = [-1, 1, -1, 1]; //re

function solution(number) {
  const answer = [];
  let ansCount = 0;

  

  function DFS(idx, depth) {
    let sum = 0;
    console.log(`idx:${idx}, val:${number[idx]}, depth:${depth}, sum:${sum} `)
    //종료조건, 3개의 숫자를 뽑으니까 최고 dept는 2까지, 
    //즉 3까지 깊이 파면 안되니, depth==3을 종료조건으로 만들어준다
    if (depth == 3) {
      console.log(answer);
      sum = answer.reduce((acc, curr) => acc + curr);
      sum == 0 && ansCount++;
      // console.log(`idx:${idx}, depth:${depth}, sum:${sum} `)
      return;//돌아가!백트레킹 - ㄱ
    }

    //DFS for문
    // 이전 dfs의 idx+1에서 시작(숫자 하나를 선택했으므로) 
    for (let i = idx; i < number.length; i++) {
      answer[depth] = number[i];
      DFS(i + 1, depth + 1);
      //넵 돌아감다! - ㄴ -> for문 돌아감! , 즉 depth는 절대 3을 넘길수 없음
    }
  }

  
  DFS(0, 0); //(idx, depth)
  return ansCount;
}

const v = solution(number);
console.log(v);