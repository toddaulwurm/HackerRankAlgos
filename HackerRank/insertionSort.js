

function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let suspect = arr[i];
            let scoutIndex = i-1; 
            while ((scoutIndex > -1) && (suspect < arr[scoutIndex])) {
                arr[scoutIndex+1] = arr[scoutIndex];
                scoutIndex--;
            }
            // +1 because the while loop will always go one past the desired location.
            arr[scoutIndex+1] = suspect;
        }
    return arr;
}
