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

const result = bfsSolution(maps);
// const result = dfsSolution(maps);
console.log(result);

//BFS
function bfsSolution(maps) {
  //count임
  let answer = 1;

  let queue = [];

  let dx = [0, 1, 0, -1];
  let dy = [-1, 0, 1, 0];
  const yLength = maps.length;
  const xLength = maps[0].length;

  let startX = 0,
    startY = 0;
  queue.push([startY, startX]);
  maps[(startY, startX)] = 0;

  while (queue.length > 0) {
    // console.log(queue.length);
    for (let i = 0; i <= queue.length - 1; i++) {
      const [y, x] = queue.shift();

      for (let j = 0; j < dx.length; j++) {
        //인덱스 계산
        const ny = y + dy[j];
        const nx = x + dx[j];

        if (
          ny >= 0 &&
          ny < yLength &&
          nx >= 0 &&
          nx < xLength &&
          maps[ny][nx] === 1
        ) {
          // console.log("ny, nx, val", ny, nx, maps[ny][nx]);
          if (nx === xLength - 1 && ny === yLength - 1) {
            // console.log("a", ny, nx);
            return ++answer;
          }

          queue.push([ny, nx]);
          maps[ny][nx] = 0;
        }
      }
    }
    // NOTE: 어디서 count 하냐가 중요한데, que에서 shift()다 해주고 count를 올려줘야한다 유의!
    answer++;
    // console.log(queue);
    // console.log(answer);
  }

  return -1;
}

function dfsSolution(maps) {
  var answer = 0;
  let router = [];
  let counter = 0;
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  const xRange = maps[0].length;
  const yRange = maps.length;
  // console.log(xRange);
  // console.log(yRange);
  function dfs(y, x) {
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (
        nx >= 0 &&
        nx < xRange &&
        ny >= 0 &&
        ny < yRange &&
        maps[ny][nx] === 1
      ) {
        // console.log(ny, nx);
        if (nx === xRange - 1 && ny === yRange - 1) {
          ++counter;
          router.push(counter);
          return;
        }

        ++counter;
        maps[ny][nx] = 0;
        dfs(ny, nx);
        --counter;
        maps[ny][nx] = 1;
      }
    }
  }

  dfs(0, 0);

  // console.log(router);
  answer = Math.min(...router);

  return answer;
}
