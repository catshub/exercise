/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (64.82%)
 * Likes:    675
 * Dislikes: 0
 * Total Accepted:    65.4K
 * Total Submissions: 95.8K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 *
 * 示例:
 *
 * 输入: 3
 * 输出: 5
 * 解释:
 * 给定 n = 3, 一共有 5 种不同结构的二叉搜索树:
 *
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const sum = [1, 1]
  let i = 1
  while (++i <= n) {
    sum[i] = 0
    for (let s = 1; s <= i; s++) {
      sum[i] += sum[s - 1] * sum[i - s]
    }
  }
  return sum[i - 1]
}
// @lc code=end
