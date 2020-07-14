/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU缓存
 *
 * https://leetcode-cn.com/problems/lfu-cache/description/
 *
 * algorithms
 * Hard (33.97%)
 * Likes:    211
 * Dislikes: 0
 * Total Accepted:    14.3K
 * Total Submissions: 34.1K
 * Testcase Example:  '["LFUCache","put","put","get","put","get","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]'
 *
 * 请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。它应该支持以下操作：get 和 put。
 *
 *
 * get(key) - 如果键存在于缓存中，则获取键的值（总是正数），否则返回 -1。
 * put(key, value) -
 * 如果键已存在，则变更其值；如果键不存在，请插入键值对。当缓存达到其容量时，则应该在插入新项之前，使最不经常使用的项无效。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除最久未使用的键。
 *
 *
 * 「项的使用次数」就是自插入该项以来对其调用 get 和 put 函数的次数之和。使用次数会在对应项被移除后置为 0 。
 *
 *
 *
 * 进阶：
 * 你是否可以在 O(1) 时间复杂度内执行两项操作？
 *
 *
 *
 * 示例：
 *
 * LFUCache cache = new LFUCache( 2 );
 *
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // 返回 1
 * cache.put(3, 3);    // 去除 key 2
 * cache.get(2);       // 返回 -1 (未找到key 2)
 * cache.get(3);       // 返回 3
 * cache.put(4, 4);    // 去除 key 1
 * cache.get(1);       // 返回 -1 (未找到 key 1)
 * cache.get(3);       // 返回 3
 * cache.get(4);       // 返回 4
 *
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity
  this.store = new Map()
  this.lfu = Object.create(null)
}

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  const obj = this.store.get(key)
  if (!obj) return -1

  this.lfu[obj.count] = (this.lfu[obj.count] || []).filter((k) => k !== key)
  ++obj.count
  ;(this.lfu[obj.count] = this.lfu[obj.count] || []).push(key)

  return obj.value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) return
  if (this.store.size === this.capacity && !this.store.get(key)) {
    let s = 0
    while (this.lfu[s] && this.lfu[s].length === 0) {
      s++
    }
    if (this.lfu[s]) {
      const k = this.lfu[s].shift()
      this.store.delete(k)
    }
  }

  const obj = this.store.get(key) || { count: -1 }
  obj.value = value

  this.lfu[obj.count] = (this.lfu[obj.count] || []).filter((k) => k !== key)
  ++obj.count
  ;(this.lfu[obj.count] = this.lfu[obj.count] || []).push(key)

  this.store.set(key, obj)
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
