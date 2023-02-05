# 6 - Zigzag Conversion
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let arr = Array.from({ length: numRows}, ()=>'');
  let row = 0;
  let down = true;
  
  for(let i = 0; i < s.length; i++){
    if(down){
      arr[row]+=s[i];
      ++row;
    } else {
      arr[row]+=s[i];
      --row;
    }
    
    if(row >= numRows){
      down = false;
      row-=2;
      row = row < 0 ? 0 : row;
    }
    
    if(row === 0){
      down = true;
    }
  }
  
  return arr.join('');
};
