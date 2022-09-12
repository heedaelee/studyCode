/** 
입출력 예
maps	answer
[[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	11
[[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]	-1
*/

let maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

solution(maps);


function solution(params) {
  let answer = 0;

  


  return answer;
}


// function solution(maps) {
//   var answer = 0;
//   let preAnswer = 0;
//   dfs(0, 0, preAnswer);

//   function dfs(y, x, pA) {
//     console.log(y, x);

//     if (
//       y > maps.length - 1 ||
//       y < 0 ||
//       x > maps[0].length - 1 ||
//       x < 0
//     )
//       return;
//     const Ndata = maps[y][x];
//     if (!Ndata) return;

//     pA++;

//     if (y === maps.length - 1 && x === maps[0].length - 1) {
//       answer = Math.min(pA, preAnswer);
//       return;
//     }

//     dfs(y - 1, x, pA);
//     dfs(y, x + 1, pA);
//     dfs(y + 1, x, pA);
//     dfs(y, x - 1, pA);
//   }

//   return answer;
// }


