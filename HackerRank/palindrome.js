function palindrome(phrase){
    for(let i=0; i<phrase.length; i++){
        if(phrase[i]==phrase[phrase.length -i -1]){
            continue
        }
        else{
            return false
        }
    }
    return true
}
console.log(palindrome("Hello Dolly"))
console.log(palindrome("racecar"))
console.log(palindrome("Racecar"))