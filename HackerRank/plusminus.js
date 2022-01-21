
function plusMinus(arr) {
    let plusCount = 0;
    let minusCount = 0;
    let zeroCount = 0;
    let count = 0;
    for(let i=0;i<arr.length;i++){
        count++;
        if(arr[i]>0){
            plusCount++;
        }
        else if(arr[i]<0){
            minusCount++;
        }
        else{
            zeroCount++;
        }
    }
    plusCount = plusCount/count;
    minusCount = minusCount/count;
    zeroCount = zeroCount/count;
    console.log(plusCount.toFixed(6))
    console.log(minusCount.toFixed(6))
    console.log(zeroCount.toFixed(6))
}

plusMinus([1,-1,0,-2,1])
plusMinus([-1,-1,0,-2,1])
plusMinus([1,0,0,-2,0])
plusMinus([1,1,1,3,2])
