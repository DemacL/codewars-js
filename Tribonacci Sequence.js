// tribonacci([3,2,1],10)

function tribonacci(signature, n) {
    let num = n;
    while (num-- > 3) {
        signature.push(signature[signature.length - 3] + signature[signature.length - 2] + signature[signature.length - 1])
    }
    return signature.slice(0, n);
}


console.log(tribonacci([1, 1, 1], 1));