/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (48.84%)
 * Likes:    579
 * Dislikes: 0
 * Total Accepted:    98.7K
 * Total Submissions: 197.4K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 *
 * 示例:
 *
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let left = (head = new ListNode())
  let arr = []
  for (let item of lists) {
    while (item) {
      arr.push(item.val)
      item = item.next
    }
  }
  arr.sort((a, b) => a - b)
  arr.forEach((a) => {
    left.next = new ListNode(a)
    left = left.next
  })
  return head.next
}
// @lc code=end
