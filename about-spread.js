function fn(a, b) {
    console.log(a, b)
    console.log(arguments)
} //< ECMA6

function fn(a, b, ...args) {
    console.log(a, b)
    console.log(args)
} //ECMA6 спред-оператор

fn(1)
fn(1,2)
fn(1,2,3,4,5)

arr = [1,2,3]
console.log(arr)
console.log(...arr)
console.log(arr[0], arr[1], arr[2])

arr1 = [1,2,3,4,5]
arr2 = [...arr1, 6]
console.log(arr2)