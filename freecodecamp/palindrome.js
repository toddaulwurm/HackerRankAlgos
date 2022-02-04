function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  console.log(str)
  for(let i=0; i<str.length/2; i++){
    if(str[i]!=str[str.length-1-i]){
      return false
    }
  }
  return true
}

console.log(palindrome("eye"));
console.log(palindrome("not a palindrome"))