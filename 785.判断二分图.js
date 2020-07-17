/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 *
 * https://leetcode-cn.com/problems/is-graph-bipartite/description/
 *
 * algorithms
 * Medium (42.91%)
 * Likes:    144
 * Dislikes: 0
 * Total Accepted:    22K
 * Total Submissions: 45K
 * Testcase Example:  '[[1,3],[0,2],[1,3],[0,2]]'
 *
 * 给定一个无向图graph，当这个图为二分图时返回true。
 *
 * 如果我们能将一个图的节点集合分割成两个独立的子集A和B，并使图中的每一条边的两个节点一个来自A集合，一个来自B集合，我们就将这个图称为二分图。
 *
 *
 * graph将会以邻接表方式给出，graph[i]表示图中与节点i相连的所有节点。每个节点都是一个在0到graph.length-1之间的整数。这图中没有自环和平行边：
 * graph[i] 中不存在i，并且graph[i]中没有重复的值。
 *
 *
 *
 * 示例 1:
 * 输入: [[1,3], [0,2], [1,3], [0,2]]
 * 输出: true
 * 解释:
 * 无向图如下:
 * 0----1
 * |    |
 * |    |
 * 3----2
 * 我们可以将节点分成两组: {0, 2} 和 {1, 3}。
 *
 *
 *
 *
 * 示例 2:
 * 输入: [[1,2,3], [0,2], [0,1,3], [0,2]]
 * 输出: false
 * 解释:
 * 无向图如下:
 * 0----1
 * | \  |
 * |  \ |
 * 3----2
 * 我们不能将节点分割成两个独立的子集。
 *
 *
 * 注意:
 *
 *
 * graph 的长度范围为 [1, 100]。
 * graph[i] 中的元素的范围为 [0, graph.length - 1]。
 * graph[i] 不会包含 i 或者有重复的值。
 * 图是无向的: 如果j 在 graph[i]里边, 那么 i 也会在 graph[j]里边。
 *
 *
 */

// @lc code=start
/**
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  let l = new Set()
  let r = new Set()
  let usedIdx = new Set()
  graph.some((a, i) => {
    if (a.length !== 0) {
      l.add(i)
      usedIdx.add(i)
      return true
    }
  })
  let loop = 1
  let res = true
  while (loop) {
    let ll = l
    let rr = r
    if (loop % 2 === 1) {
      ll = r
      rr = l
    }
    const shouldL = Array.from(rr).reduce((pre, cur) => {
      usedIdx.add(cur)
      return pre.concat(graph[cur])
    }, [])
    if (shouldL.some(s => rr.has(s))) {
      res = false
      break
    }
    if (shouldL.every(s => ll.has(s))) {
      if (usedIdx.size >= graph.length) {
        break;
      }
      let len = graph.length
      while (len) {
        --len
        if (!usedIdx.has(len)) {
          l.add(len)
          loop = 0
          break
        }
      }
    }
    shouldL.forEach(s => {
      usedIdx.add(s)
      ll.add(s)
    })
    ++loop
  }
  return res
};
// @lc code=end
