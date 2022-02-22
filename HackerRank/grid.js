let grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']

function gridChallenge(grid){
    for(let i=0; i<grid.length; i++){
        grid[i] = grid[i].split('')
        code(grid[i])
        insertionSort(grid[i])
        decode(grid[i])
    }
    for(let i=0; i<grid[0].length; i++){
        let walker = 0
        let runnerCol = 1
        while(runnerCol<grid.length && grid[walker][i].charCodeAt(0)<=grid[runnerCol][i].charCodeAt(0)){
            walker++
            runnerCol++
        }
        if(runnerCol<grid.length){
            console.log(grid)
            return false
        }
    }
    console.log(grid)
    return true
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let suspect = arr[i];
        let scoutIndex = i-1; 
        while ((scoutIndex > -1) && (suspect <= arr[scoutIndex])) {
            arr[scoutIndex+1] = arr[scoutIndex];
            scoutIndex--;
        }
        // +1 because the while loop will always go one past the desired location.
        arr[scoutIndex+1] = suspect;
    }
return arr;
}

function code(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i].charCodeAt()
    }
    return arr
}

function decode(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = String.fromCharCode(arr[i])
    }
    return arr
}

console.log(gridChallenge(grid))