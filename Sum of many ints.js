function f(n, m) {
    const x = Math.floor(n / m);
    const y = n % m;
    return x * (m - 1) * m / 2 + (1 + y) * y / 2
}