/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (73.33%)
 * Likes:    964
 * Dislikes: 0
 * Total Accepted:    117.3K
 * Total Submissions: 155.9K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 *
 *
 * 示例：
 *
 * 输入：n = 3
 * 输出：[
 * ⁠      "((()))",
 * ⁠      "(()())",
 * ⁠      "(())()",
 * ⁠      "()(())",
 * ⁠      "()()()"
 * ⁠    ]
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = []

  function make(l, r, s) {
    if (l === 0 && r === 0) {
      return res.push(s)
    }
    if (l > 0) make(l - 1, r, s + '(')
    if (l < r) make(l, r - 1, s + ')')
  }
  make(n, n, '')

  return res
}
// @lc code=end
