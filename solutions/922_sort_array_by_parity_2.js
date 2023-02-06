# 922 - Sort Array By Parity II

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let arr = new Array();
    let evenIndex = 0;
    let oddIndex = 1;
  
    for(let i = 0; i < nums.length; i++){
      let index = nums[i] % 2 === 0 ? evenIndex : oddIndex;
      arr[index] = nums[i];
      nums[i] % 2 === 0 ? evenIndex = evenIndex + 2 : oddIndex = oddIndex + 2;
    }
  
  return arr;
 
};
