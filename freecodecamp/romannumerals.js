function convertToRoman(num) {
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let str = ""
    for(var numeral of Object.keys(roman)){
      console.log(roman[numeral])
      let multiple = Math.floor(num/roman[numeral])
      num -= multiple*roman[numeral]
      console.log(num)
      str += numeral.repeat(multiple);
      console.log(str)
    }
   return str;
  }
  
  convertToRoman(36);