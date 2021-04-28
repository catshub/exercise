/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
 *
 * https://leetcode-cn.com/problems/range-sum-of-bst/description/
 *
 * algorithms
 * Easy (78.12%)
 * Likes:    221
 * Dislikes: 0
 * Total Accepted:    87.3K
 * Total Submissions: 106.7K
 * Testcase Example:  '[10,5,15,3,7,null,18]\n7\n15'
 *
 * 给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
 * 输出：32
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
 * 输出：23
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [1, 2 * 10^4] 内
 * 1
 * 1
 * 所有 Node.val 互不相同
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (node, low, high) {
  if (!node) return 0

  if (node.val < low) {
    return rangeSumBST(node.right, low, high)
  }

  if (node.val >= low && node.val <= high) {
    return node.val + rangeSumBST(node.left, low, high) + rangeSumBST(node.right, low, high)
  }

  if (node.val > high) {
    return rangeSumBST(node.left, low, high)
  }
  return rangeSumBST(node, low, high)
}
// @lc code=end
