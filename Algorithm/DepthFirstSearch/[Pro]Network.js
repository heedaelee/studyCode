/* 
입출력 예
n	computers	return
3	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]	2
3	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]	1

point : checked 를 만든다 : boolean으로
*/

const computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
let n = computers.length;

solution(n, computers);

function solution(n, computers) {
  let answer = 0;

  const check = [];
  for (const computer of computers) {
    check.push(false);
  }

  // console.log(check);

  function DFS(index) {
    check[index] = true;

    //0,1,2
    // 세로행 고정, 가로행 반복, check[idx]가 이미 true기에 자기자신은 타지 않는다.
    for (let i = 0; i < computers.length; i++) {
      if (computers[index][i] === 1 && !check[i]) {
        DFS(i);
      }
    }
  }

  for (let i = 0; i < computers.length; i++) {
    if (!check[i]) {
      //0, 1, 2
      DFS(i);
      answer += 1;
    }
  }
}

/** failcode
 * 
 * function solution(n, computers) {
    var answer = 0;
    let counter = 0;
    let routers = [];
    
    
    for(let i = 0; i<computers.length; i++){
        dfs(i)
    }
    
    function dfs (idx) {
        
        if(idx+1 >= computers.length) {
            ++counter;
            return;
        }
        
        for(let i = idx+1; idx < computers.length; idx++){
            if(computers[idx][i] === 1){
            computers[idx][i] = 0;
            dfs(i);
            }
            ++counter;
                       
        }
            
    }
    
    return answer;
}
 */
