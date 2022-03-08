/**
 * leetcode에서 다른 솔루션 찾음
 */

let numIslands = function (grid) {
  let counter = 0;

  const dfs = (i, j) => {
    if (i >= 0 && j >= 0 && i < grid.length && j < grid[i].length && grid[i][j] === "1") {
      grid[i][j] = "0";
      dfs(i - 1, j); // top
      dfs(i, j + 1); // right
      dfs(i + 1, j); // bottom
      dfs(i, j - 1); // left
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        counter += 1;
        dfs(i, j);
      }
    }
  }
  return counter;
};

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "1", "0"],
];

console.log(numIslands(grid));
