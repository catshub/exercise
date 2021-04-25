/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序搜索树
 *
 * https://leetcode-cn.com/problems/increasing-order-search-tree/description/
 *
 * algorithms
 * Easy (72.58%)
 * Likes:    201
 * Dislikes: 0
 * Total Accepted:    48.6K
 * Total Submissions: 65.1K
 * Testcase Example:  '[5,3,6,2,4,null,8,1,null,null,null,7,9]'
 *
 * 给你一棵二叉搜索树，请你 按中序遍历
 * 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
 * 输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [5,1,7]
 * 输出：[1,null,5,null,7]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数的取值范围是 [1, 100]
 * 0
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const res = []

  function loop(node, res) {
    if (!node) return
    loop(node.left, res)
    res.push(node.val)
    loop(node.right, res)
  }

  loop(root, res)

  let node = (tmp = new TreeNode())
  for (let i = 0; i < res.length; i++) {
    tmp.right = new TreeNode(res[i])
    tmp = tmp.right
  }

  return node.right
}
// @lc code=end
