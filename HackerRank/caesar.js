function caesarCipher(s,k) {
    let capAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowAlpha = 'abcdefghijklmnopqrstuvwxyz'
    let final = ""
    const regex = /[A-Z]/i
    while(k>=26){
        k-=26
    }
    for(let i=0; i<s.length; i++){
        isAlpha = regex.test(s[i])
        console.log(`${s[i]} is ALPHA: ${isAlpha}`)
        if(!isAlpha){
            final=`${final}${s[i]}`
        }
        else if(s[i]===s[i].toUpperCase()){
            let location = capAlpha.indexOf(s[i])+k
            if(location>=capAlpha.length){
                location-=26
            }
            final= `${final}${capAlpha[location]}`
        }
        else if(s[i]===s[i].toLowerCase()){
            let location = lowAlpha.indexOf(s[i])+k
            if(location>=lowAlpha.length){
                location-=26
            }
            final=`${final}${lowAlpha[location]}`
        }
    }
    return final
}
console.log(caesarCipher("1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M",27))
// 1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N
// 1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N

