# 438 - Find All Anagrams in a String
function frequencyPattern (arr1, frequencyCounter2){
  let frequencyCounter1 = {}
  for(let val of arr1){ // first loop
      frequencyCounter1[val]= (frequencyCounter1[val] || 0) + 1
  }
  for(let key in frequencyCounter1){
      if(!(key in frequencyCounter2)){
          return false
      }
      if( frequencyCounter2[key] !== frequencyCounter1[key]){
          return false
      }
    }
  return true
  }

var findAnagrams = function(s, p) {
    let position = [];
    let matchedStrings = [];
    let splitText = p.split('');
    let frequencyCounter2 = {};
  
  for(let val of splitText){ // second loop
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter2)
    
    for(let i = 0; i < s.length; i++){
      if(p.includes(s[i])){
        let str = s.slice(i, i + p.length);
        if(str.length === p.length) {
          matchedStrings.push([str, i])
        }
      }
    }
  for(let i = 0; i < matchedStrings.length; i ++){
    let doesMatch = frequencyPattern(matchedStrings[i][0].split(''), frequencyCounter2)
    if(doesMatch){
      position.push(matchedStrings[i][1]);
    }
  }
  return position;
  
};
