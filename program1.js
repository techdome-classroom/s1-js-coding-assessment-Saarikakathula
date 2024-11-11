const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Helper function to perform DFS and mark the entire island
  const dfs = (i, j) => {
      // Check for out-of-bounds or if the cell is water ('W')
      if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') {
          return;
      }

      // Mark the cell as visited by setting it to 'W'
      grid[i][j] = 'W';

      // Explore all 4 adjacent cells (up, down, left, right)
      dfs(i + 1, j); // down
      dfs(i - 1, j); // up
      dfs(i, j + 1); // right
      dfs(i, j - 1); // left
  };

  // Loop through every cell in the grid
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') { // Found an unvisited land cell
              islandCount++;      // New island found
              dfs(i, j);          // Mark the entire island as visited
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
