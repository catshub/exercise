/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 *
 * https://leetcode-cn.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Medium (35.35%)
 * Likes:    245
 * Dislikes: 0
 * Total Accepted:    72.7K
 * Total Submissions: 185.4K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：c = 5
 * 输出：true
 * 解释：1 * 1 + 2 * 2 = 5
 *
 *
 * 示例 2：
 *
 * 输入：c = 3
 * 输出：false
 *
 *
 * 示例 3：
 *
 * 输入：c = 4
 * 输出：true
 *
 *
 * 示例 4：
 *
 * 输入：c = 2
 * 输出：true
 *
 *
 * 示例 5：
 *
 * 输入：c = 1
 * 输出：true
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= c <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let a = 0
  let b = Math.floor(Math.sqrt(c)) + 1
  while (a <= b) {
    const res = a * a + b * b
    if (res === c) {
      return true
    }
    if (res < c) {
      a++
    } else {
      b--
    }
  }
  return false
}

var judgeSquareSum2 = function (c) {
  const max = Math.floor(Math.sqrt(c)) + 1
  for (let i = 0; i < max; i++) {
    const res = Math.sqrt(c - i * i)
    if (Number.isInteger(res)) return true
  }
  return false
}
// @lc code=end
