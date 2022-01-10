let uri = "%D1%88%D0%B5%D0%BB%D0%BB%D1%8B";
let word = "Shannon]";
let array = [1,6,-6,4,5,77]



// MATH
console.log(Math.abs(-6))

console.log(Math.min(...array))

console.log((array[5]/array[4]).toFixed(2))


// Encode/Decode
console.log(decodeURI(uri))

console.log(encodeURI(word))

var world = "A string with symbols & characters that have special meaning?";
var uril = 'http://example.com/foo?hello=' + encodeURIComponent(world);
console.log(uril)

//Arrays
console.log(array.shift())

console.log(array.reduce((previousValue, currentValue) => previousValue + currentValue))

console.log(array.unshift(99))

console.log(array.map(item => item+4)) 

console.log(array.splice(1,0,666))
console.log(array.values())


// String
console.log(word.substring(2,5))

