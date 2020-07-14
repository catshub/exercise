/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

  你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const j = map.get(target - nums[i])
    if (j !== undefined) return [j, i]
    map.set(nums[i], i)
  }
}
// @lc code=end
