function add(a, b) {
    return(a += b)
}
add()

function subtract(b, a) {
    return(b -= a)
}
subtract()

function multiply(a, b) {
    return(a *= b)
}
multiply()

function divide(a, b) {
    return(a /= b)
}
divide()

function increment(n) {
    return(++n);
}
increment()

function decrement(n) {
    return(--n);
}
decrement()

function makeInt(n) {
    return(n);
}
makeInt()

function makeInt(n) {
    return parseInt(n, 10);
}
makeInt()

function preserveDecimal(n) {
    return parseFloat(n);
}
preserveDecimal()