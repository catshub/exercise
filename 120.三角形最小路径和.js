/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 *
 * https://leetcode-cn.com/problems/triangle/description/
 *
 * algorithms
 * Medium (63.68%)
 * Likes:    513
 * Dislikes: 0
 * Total Accepted:    86.5K
 * Total Submissions: 130.5K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 *
 * 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
 *
 *
 *
 * 例如，给定三角形：
 *
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 *
 *
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 *
 *
 *
 * 说明：
 *
 * 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 *
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (triangle.length === 0) return 0
  const last = triangle.length - 1
  let dp = [[]] // 二维数组
  dp[0][0] = triangle[0][0]
  function loop(row) {
    let i = 0
    ;(dp[row] = dp[row] || [])[i] = triangle[row][i] + dp[row - 1][i]
    while (++i < row) {
      dp[row][i] = triangle[row][i] + Math.min(dp[row - 1][i - 1], dp[row - 1][i] || 0)
    }
    for (let i = 1; i < row; i++) {}
    dp[row][i] = triangle[row][i] + Math.min(dp[row - 1][i - 1], dp[row - 1][i] || 0)

    if (row < last) {
      loop(row + 1)
    }
  }
  loop(1)
  return Math.min(...dp[last])
}
// @lc code=end
