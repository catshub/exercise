/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 *
 * https://leetcode.cn/problems/find-largest-value-in-each-tree-row/description/
 *
 * algorithms
 * Medium (66.03%)
 * Likes:    239
 * Dislikes: 0
 * Total Accepted:    84.5K
 * Total Submissions: 128K
 * Testcase Example:  '[1,3,2,5,3,null,9]'
 *
 * 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
 *
 *
 *
 * 示例1：
 *
 *
 *
 *
 * 输入: root = [1,3,2,5,3,null,9]
 * 输出: [1,3,9]
 *
 *
 * 示例2：
 *
 *
 * 输入: root = [1,2,3]
 * 输出: [1,3]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 二叉树的节点个数的范围是 [0,10^4]
 * -2^31 <= Node.val <= 2^31 - 1
 *
 *
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
 * @return {number[]}
 */
var largestValues = function (root) {
  const res = []

  function loop(nd, level) {
    if (!nd) return
    if (res[level] === undefined || res[level] === null) {
      res[level] = nd.val
    } else if (nd.val === null || nd.val === undefined) {
    } else {
      res[level] = Math.max(res[level], nd.val)
    }
    if (nd.left) {
      loop(nd.left, level + 1)
    }
    if (nd.right) {
      loop(nd.right, level + 1)
    }
  }
  loop(root, 0)

  return res
}
// @lc code=end
