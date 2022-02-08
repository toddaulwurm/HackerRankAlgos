function caesarCipher(s, k) {
    let capAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowAlpha = 'abcdefghijklmnopqrstuvwxyz'
    let final = ""
    console.log(lowAlpha)
    for(let i=0; i<s.length; i++){
        if(s[i]==="-"){
            final+="-"
        }
        else if(s[i]===s[i].toUpperCase()){
            let location = capAlpha.indexOf(s[i])+k
            if(location>=capAlpha.length){
                location-=(capAlpha.length-1)
            }
            final+=`${capAlpha[location]}`
        }
        else{
            let location = lowAlpha.indexOf(s[i])+k
            if(location>=lowAlpha.length){
                location-=(lowAlpha.length-1)
            }
            final+=`${lowAlpha[location]}`
        }
    }
    return final
}
console.log(caesarCipher("Hello"))