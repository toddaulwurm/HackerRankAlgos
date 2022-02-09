function telephoneCheck(str) {
    str = str.replaceAll(" ", "")
    var reg = /^\+?[1]?[\s-]?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/gm;
    if(str.length<10){
    return false
    }
    else{
        if(str.match(reg)){
        return true
        }
        else{
        return false
        }
    }
}