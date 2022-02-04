function rot13(str) {
    let alpha = ["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let ciphered = ""
    for(let i=0;i<str.length;i++){
      let location = alpha.indexOf(str[i]);
      if(location==-1){
        ciphered+=str[i]
      }
      else{
        location -= 13;
        if(location<=0){
          location+=26
        }
        ciphered+= alpha[location]
      }
    }
    console.log(ciphered)
    return ciphered;
  }
  
  rot13("SERR PBQR PNZC");