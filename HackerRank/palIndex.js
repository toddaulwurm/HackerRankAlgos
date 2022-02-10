function palindromeIndex(s) {
    if(s[0]==s[s.length-1]){
        let i = 1
        while(s[i]==s[s.length-1-i] && i<s.length-1){
            // console.log(s[i])
            i++
        }
        if(s[i+1]==s[s.length-1-i]){
            return i
        }
        else if(s[i]==s[s.length-2-i]){
            return (s.length-1-i)
        }
        else{
            return -1
        }
    }
    else{
        if(s[0]==s[s.length-2]){
            return s.length-1
        }
        if(s[1]==s[s.length-1]){
            return 0
        }
        else{
            return "No one solution"
        }
    }
}
console.log(palindromeIndex('batab'))
console.log(palindromeIndex('baatab'))
console.log(palindromeIndex('baaba'))
console.log(palindromeIndex('baaaataaaaab'))