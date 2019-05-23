

function perimeter(n) {
    let fib = (x) => {
        if (fib.cache && fib.cache.get(x)) {
            return fib.cache.get(x)
        }
        if (x === 0 || x === 1) {
            return 1;
        } else {
            const r = fib(x - 1) + fib(x - 2);
            if (!fib.cache) {
                fib.cache = new Map();
            }
            fib.cache.set(x, r);
            return r;
        }

    }

    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += fib(i);
    }
    return 4 * sum;
}

console.time();
console.log(perimeter(64));
console.timeEnd();