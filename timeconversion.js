function timeConversion(s) {
    let final = "";
    let PMcalcTENS = 0;
    let PMcalcONES = 0;
    let digits = [0,1,2,3,4,5,6,7,8,9]
    if(s[8]=='A'){
        if(s[0]=='1'&&s[1]=='2'){
            PMcalcTENS='0';
            PMcalcONES='0';
            final=s.slice(2,8);
            final = `${PMcalcTENS}${PMcalcONES}${final}`
        }
        else{
            final=s.slice(0,8);
        }
    }
    else{
        for(let i = 0; i<digits.length; i++){
            if(s[0]==digits[i]){
                PMcalcTENS = digits[i]+1
            }
            if(s[1]==digits[i]){
                PMcalcONES = digits[i]+2
            }
        }
        if(s[0]==1&&s[1]==2){
            PMcalcTENS--;
            PMcalcONES-=2;
        }
        final=s.slice(2,8);
        final = `${PMcalcTENS}${PMcalcONES}${final}`
    }
    console.log(final);
}

timeConversion('12:00:00PM')
timeConversion('02:01:00AM')
timeConversion('03:00:00PM')
timeConversion('01:01:00PM')
timeConversion('07:05:45PM')