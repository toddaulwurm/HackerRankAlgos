function addTheDigits(numString) {
    let total = 0
    for(let i=0; i<numString.length; i++){
        total += parseInt(numString[i])
    }
    return total.toString()
}

function superDigit(n, k) {
    let temp = addTheDigits(n)
    while(temp.length>1){
        temp = addTheDigits(temp)
    }
    return temp
}


console.log(superDigit('148')) 
console.log(superDigit('9875')) 
console.log(superDigit('123')) 