/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (52.54%)
 * Likes:    648
 * Dislikes: 0
 * Total Accepted:    97.8K
 * Total Submissions: 184.2K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 *
 *
 * 示例:
 *
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 *
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 *
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var obj = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}

var letterCombinations = function (digits) {
  if (!digits) return []

  const res = []

  function add(idx, str) {
    if (idx == digits.length) {
      return res.push(str)
    }
    for (let i of obj[digits[idx]]) {
      add(idx + 1, str + i)
    }
  }
  add(0, '')

  return res
}
// @lc code=end
