function topLeftMatrix(matrix){
    let n = matrix[0].length
    let sum=0;
    for(let i=0; i<n/2; i++){
        for(let j=0; j<n/2; j++){
            sum += Math.max(matrix[i][j], matrix[n-1-i][j], matrix[i][n-1-j], matrix[n-1-i][n-1-j])
        }
    }
    return sum
}
let tester = [  
                [50,2,3,4],
                [5,0,0,8],
                [9,0,0,12],
                [13,14,15,49]
            ]
console.log(topLeftMatrix(tester))

