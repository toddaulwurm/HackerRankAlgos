
function countingSort(arr) {
    let collector = new Array(100); 
    for (let i=0; i<100; ++i){
        collector[i] = 0;
    }
    for(let i=0; i<arr.length; i++){
        collector[arr[i]]++;
    }
    return collector
}

let tester = [1,2,3,3,4,5,2,5,2,6,26,2,62,62,6,26,26,2,6,24,62,46,2,46,25,2,2,52,35,25,2,52,5,23,35,6,5,5,5,5,5,5,4,4,4,4,5,6,6]
console.log(countingSort(tester))
