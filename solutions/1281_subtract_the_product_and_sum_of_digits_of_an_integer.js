# 1281 - Subtract the Product and Sum of Digits of an Integer

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let numbers = (n + '').split('');
    let sum = numbers.reduce((curr,arr) => curr + (+arr),0);
    let mul = numbers.reduce((curr,arr) => curr * (+arr), 1);
    return mul - sum;
};
