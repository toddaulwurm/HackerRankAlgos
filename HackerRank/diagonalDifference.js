

function diagonalDifference(arr) {
    let primaryDiagonal = 0;
    let secondaryDiagnonal = 0;
    for(let i=0; i<arr[0].length;i++){
        primaryDiagonal+=arr[i][i]
    }
    let counter = 0
    for(let i=arr.length-1; i>=0;i--){
        secondaryDiagnonal+=arr[i][counter]
        counter++
    }
    return Math.abs(secondaryDiagnonal-primaryDiagonal) 
}

let matrix = [  [1,2,30],
                [1,2,3],
                [1,2,3]
            ]
console.log(diagonalDifference(matrix))