/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 *
 * https://leetcode-cn.com/problems/decode-string/description/
 *
 * algorithms
 * Medium (48.51%)
 * Likes:    308
 * Dislikes: 0
 * Total Accepted:    34.1K
 * Total Submissions: 66.4K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 *
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 *
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 *
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 *
 * 示例:
 *
 *
 * s = "3[a]2[bc]", 返回 "aaabcbc".
 * s = "3[a2[c]]", 返回 "accaccacc".
 * s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = []

  let num = (str = '')
  for (const i of s) {
    if (!isNaN(+i)) {
      num += i
    } else if (i === '[') {
      stack.push(num)
      num = ''
      stack.push(i)
    } else if (i === ']') {
      let tmp = ''
      while ((str = stack.pop()) !== '[') {
        tmp = str + tmp
      }
      stack.push(tmp.repeat(stack.pop()))
    } else {
      stack.push(i)
    }
  }
  return stack.join('')
}

/**
 * 垃圾方法
 * @param {string} s
 */
var decodeString_laji = function (s) {
  if (!s) return s
  let str = replace(s)
  str = str.replace(/^\+/, '')
  const res = eval(str)
  return res
}
function replace(s) {
  let str = ''
  if (!/^\d/.test(s)) {
    str = `'`
  }
  let num = ''
  let preLetter = false
  let preKuo = false
  for (const j in s) {
    const i = s[j]
    if (!isNaN(+i)) {
      if (!preLetter) {
        if (/[a-zA-Z]/.test(s[j - 1] || '')) {
          preLetter = true
        }
      }
      if (!preKuo) {
        if (s[j - 1] === '[') {
          preKuo = true
        }
      }
      num += i
    } else if (i === '[') {
      if (preLetter) {
        str += `'+`
      } else if (preKuo) {
        str = str.replace(/'$/, '')
      } else {
        str += `+`
      }
      str += `fnc(${num},'`
      num = ''
      preLetter = false
      preKuo = false
    } else if (i === ']') {
      if (/[a-zA-Z]/.test(s[j - 1] || '')) {
        str += `'`
      }
      str += `)`
    } else {
      if (s[j - 1] === ']') {
        str += `+'`
      }
      str += i
    }
  }
  if (s[s.length - 1] !== ']') {
    str += `'`
  }
  return str
}
function fnc(n, str) {
  return str.repeat(n)
}

/**
 * 方法2
 * @param {string} s
 */
var decodeString2 = function (s) {
  const reg = /(\d+)\[([a-zA-Z]+)\]/
  let isMatch = true
  while (isMatch) {
    isMatch = false
    s = s.replace(reg, function (substr, n, str) {
      isMatch = true
      return str.repeat(n)
    })
  }
  return s
}
// @lc code=end
