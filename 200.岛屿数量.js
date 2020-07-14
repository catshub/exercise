/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 *
 * https://leetcode-cn.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (47.03%)
 * Likes:    488
 * Dislikes: 0
 * Total Accepted:    84.2K
 * Total Submissions: 173.4K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 *
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 *
 * 此外，你可以假设该网格的四条边均被水包围。
 *
 * 示例 1:
 *
 * 输入:
 * 11110
 * 11010
 * 11000
 * 00000
 * 输出: 1
 *
 *
 * 示例 2:
 *
 * 输入:
 * 11000
 * 11000
 * 00100
 * 00011
 * 输出: 3
 * 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
 *
 *
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands1 = function (grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == '1') {
        count++
        depthSearch(i, j)
      }
    }
  }
  function depthSearch(i, j) {
    grid[i][j] = '2'
    if (grid[i][j + 1] == '1') {
      depthSearch(i, j + 1)
    }
    if (i + 1 < grid.length && grid[i + 1][j] == '1') {
      depthSearch(i + 1, j)
    }
    if (i > 0 && grid[i - 1][j] == '1') {
      depthSearch(i - 1, j)
    }
    if (j > 0 && grid[i][j - 1] == '1') {
      depthSearch(i, j - 1)
    }
  }
  console.log(grid)
  return count
}

function numIslands(grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == '1') {
        count++
        widthSearch(i, j)
      }
    }
  }
  function widthSearch(i, j) {
    let support = []
    support.push(`${i},${j}`)
    grid[i][j] = '2'
    while (support.length) {
      let [ti, tj] = support
        .shift()
        .split(',')
        .map((n) => +n)

      if (grid[ti][tj + 1] == '1') {
        grid[ti][tj + 1] = '2'
        support.push(`${ti},${tj + 1}`)
      }
      if (ti + 1 < grid.length && grid[ti + 1][tj] == '1') {
        grid[ti + 1][tj] = '2'
        support.push(`${ti + 1},${tj}`)
      }
      if (ti > 0 && grid[ti - 1][tj] == '1') {
        grid[ti - 1][tj] = '2'
        support.push(`${ti - 1},${tj}`)
      }
      if (tj > 0 && grid[ti][tj - 1] == '1') {
        grid[ti][tj - 1] = '2'
        support.push(`${ti},${tj - 1}`)
      }
    }
  }
  return count
}
// @lc code=end
