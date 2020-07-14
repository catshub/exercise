/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (36.17%)
 * Likes:    1063
 * Dislikes: 0
 * Total Accepted:    270.9K
 * Total Submissions: 718.6K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const num = strs.length
  if (num === 0) return ''
  if (num === 1) return strs[0]
  let notEnd = true
  let i = 0
  let common = ''
  while (notEnd) {
    let a = num
    while (--a) {
      if (strs[a][i] !== strs[a - 1][i] || i >= strs[a].length) {
        notEnd = false
        break
      }
    }
    if (notEnd) {
      common += strs[0][i]
      ++i
    }
  }
  return common
}
// @lc code=end
