# 1470 - Shuffle the Array

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let a = new Array();
    for(let i = 0; i<n; i++){
      a.push(nums[i], nums[i + n]);
    }
  return a;
};
