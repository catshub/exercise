/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.86%)
 * Likes:    1525
 * Dislikes: 0
 * Total Accepted:    257.5K
 * Total Submissions: 622K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  const map = {
    '{': '}',
    '(': ')',
    '[': ']',
  }
  const left = ['(', '[', '{']
  const right = [')', ']', '}']
  for (let l of s) {
    if (left.includes(l)) {
      stack.push(l)
    } else if (right.includes(l)) {
      if (map[stack[stack.length - 1]] === l) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
// @lc code=end
