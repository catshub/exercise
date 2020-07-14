/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (37.18%)
 * Likes:    535
 * Dislikes: 0
 * Total Accepted:    59.6K
 * Total Submissions: 152.8K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 *
 *
 *
 * 示例 1:
 *
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 *
 *
 * 示例 2:
 *
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode-cn.com/problems/maximum-product-subarray/solution/cheng-ji-zui-da-zi-shu-zu-by-leetcode-solution/
 */
var maxProduct = function (nums) {
  let res = (max = min = nums[0])
  for (let i = 1; i < nums.length; i++) {
    let maxt = max
    let mint = min
    const tmp = nums[i]
    max = Math.max(tmp, tmp * maxt, tmp * mint)
    min = Math.min(tmp, tmp * maxt, tmp * mint)
    res = Math.max(res, max)
  }
  return res
}
// @lc code=end
