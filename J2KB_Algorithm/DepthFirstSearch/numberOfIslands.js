/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  let cnt = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // console.log(grid)
      if (grid[i][j] === "1") {
        dfs(grid, j, i);
        cnt++;
      }
    }
  }

  return cnt;
};

function dfs(grid, x, y) {
  console.log(`callstack x,y : ${x}, ${y}`);
  // console.log(grid);
  if (y < 0 || x < 0 || y >= grid.length || x >= grid[0].length || grid[y][x] === "0") {
    console.log(`call stack ${x}, ${y} pop!`);
    return;
  }
  let finder = [
    [-1, 0], //[y,x] 거꾸로
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  grid[y][x] = "0";

  for (let i = 0; i < finder.length; i++) {
    // console.log(`finder for문, finder[${i}]`);

    //문제 코드
    // console.log();
    // console.log(`finder  x : ${x + finder[i][1]} = ${x} + ${finder[i][1]} `);
    // console.log(`finder  y : ${y + finder[i][0]} = ${y} + ${finder[i][0]} `);
    // x += finder[i][1];
    // y += finder[i][0];
    // console.log(`x = ${x}`);
    // console.log(`y = ${y}`);
    // console.log(typeof x);
    // dfs(grid, x, y);

    // 수정 후 정상 코드
    console.log();
    let newX = x + finder[i][1];
    let newY = y + finder[i][0];
    console.log(`finder  newX : ${newX} = ${x} + ${finder[i][1]} `);
    console.log(`finder  newY : ${newY} = ${y} + ${finder[i][0]} `);
    dfs(grid, newX, newY);

    //재귀 리턴후 작동
    console.log(`return 후 x, y : ${x}, ${y}`);
  }
  return;
}

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "1", "0"],
];
console.log(numIslands(grid));
