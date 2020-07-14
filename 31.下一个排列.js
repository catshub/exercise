/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (32.80%)
 * Likes:    460
 * Dislikes: 0
 * Total Accepted:    56K
 * Total Submissions: 168.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 *
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 *
 * 必须原地修改，只允许使用额外常数空间。
 *
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let modif = false
  let idx = nums.length - 1
  let min = nums[nums.length - 1]
  if (nums.length < 2) return nums

  for (var i = nums.length - 2; i >= 0; i--) {
    make(i)
    if (modif) break
  }

  function make(j) {
    let min = -1
    const cur = nums[j]
    let idx = j
    for (var i = j; i < nums.length; i++) {
      const tmp = nums[i]
      if (tmp > cur) {
        if (min === -1 || tmp < min) {
          idx = i
          min = tmp
        }
      }
    }
    if (cur < min) {
      modif = true
      nums[j] = min
      nums[idx] = cur
    }
  }

  for (let k = i + 1; k < nums.length; k++) {
    for (let m = k + 1; m < nums.length; m++) {
      if (nums[k] > nums[m]) {
        const tt = nums[k]
        nums[k] = nums[m]
        nums[m] = tt
      }
    }
  }
  return nums
}
// @lc code=end
