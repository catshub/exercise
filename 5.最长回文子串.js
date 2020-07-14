/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (28.56%)
 * Likes:    1768
 * Dislikes: 0
 * Total Accepted:    184.9K
 * Total Submissions: 647.1K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length
  if (len <= 1) return s
  let max = 1
  let idx = 0
  for (let i = 0; i < len; i++) {
    const max1 = expand(s, i, i)
    const max2 = expand(s, i, i + 1)
    if (max2 > max || max1 > max) {
      max = Math.max(max, max1, max2)
      idx = i
    }
  }
  const left = Math.floor(idx + 1 - max / 2)
  return s.substr(left, max)
}
function expand(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--
    r++
  }
  return r - l - 1
}
// @lc code=end
