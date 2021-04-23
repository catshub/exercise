/*
 * @lc app=leetcode.cn id=363 lang=javascript
 *
 * [363] 矩形区域不超过 K 的最大数值和
 *
 * https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/description/
 *
 * algorithms
 * Hard (39.87%)
 * Likes:    254
 * Dislikes: 0
 * Total Accepted:    18.7K
 * Total Submissions: 40.4K
 * Testcase Example:  '[[1,0,1],[0,-2,3]]\n2'
 *
 * 给你一个 m x n 的矩阵 matrix 和一个整数 k ，找出并返回矩阵内部矩形区域的不超过 k 的最大数值和。
 *
 * 题目数据保证总会存在一个数值和不超过 k 的矩形区域。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,0,1],[0,-2,3]], k = 2
 * 输出：2
 * 解释：蓝色边框圈出来的矩形区域 [[0, 1], [-2, 3]] 的数值和是 2，且 2 是不超过 k 的最大数字（k = 2）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[2,2,-1]], k = 3
 * 输出：3
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1
 * -100
 * -10^5
 *
 *
 *
 *
 * 进阶：如果行数远大于列数，该如何设计解决方案？
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  const m = matrix.length
  const n = matrix[0].length

  let max

  for (let l = 0; l < m; l++) {
    let colSum = []

    for (let r = l; r < m; r++) {
      for (let i = 0; i < n; i++) {
        colSum[i] = (colSum[i] || 0) + (matrix[r][i] || 0)
      }

      // 求出[l,r]包含的所有矩形和
      for (let j1 = 0; j1 < n; j1++) {
        let sum = 0
        for (let j2 = j1; j2 < n; j2++) {
          sum = sum + (colSum[j2] || 0)
          if (sum <= k) {
            if (sum === k) {
              return sum
            }
            if (max === undefined) {
              max = sum
            }
            max = Math.max(max, sum)
          }
        }
      }
    }
  }

  if (max !== undefined) {
    return max
  } else {
    return null
  }
}

var maxSumSubmatrix2 = function (matrix, k) {
  const m = matrix.length
  const n = matrix[0].length

  let max

  // 四维数组, 左上角->右下角, 和
  const res = [[[[matrix[0][0]]]]] // res[0][0][0][0] = matrix[0][0]

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let ii = i; ii < m; ii++) {
        for (let jj = j; jj < n; jj++) {
          res[i] = res[i] || []
          res[i][j] = res[i][j] || []
          res[i][j][ii] = res[i][j][ii] || []

          let num =
            matrix[ii][jj] -
            (ii - 1 >= i && jj - 1 >= j ? res[i][j][ii - 1][jj - 1] : 0) +
            (jj - 1 >= j ? res[i][j][ii][jj - 1] : 0) +
            (ii - 1 >= i ? res[i][j][ii - 1][jj] : 0)

          res[i][j][ii][jj] = num

          // // 减少内存占用
          // if (jj > j + 2) {
          //   res[i][j][ii][jj - 2] = null
          // }

          if (num <= k) {
            if (num === k) {
              return num
            }
            if (max === undefined) {
              max = num
            }
            max = Math.max(max, num)
          }
        }

        // 减少内存占用
        if (ii > i + 2) {
          res[i][j][ii - 2] = null
        }
      }

      // 减少内存占用
      if (j > 1) {
        res[i][j - 2] = null
      }
    }

    // 减少内存占用
    if (i > 0) {
      res[i - 1] = null
    }
  }
  if (max !== undefined) {
    return max
  } else {
    return null
  }
}
// @lc code=end
