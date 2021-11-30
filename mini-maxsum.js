function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
           if(arr[i]>arr[j]){
               let temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
           }   
        }
    }
    for(let i=0;i<arr.length-1; i++){
        minSum+=arr[i];
    }
    for(let i=1;i<arr.length; i++){
        maxSum+=arr[i];
    }
    console.log(`${minSum} ${maxSum}`)
}