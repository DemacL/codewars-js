function divisors(integer) {
    const divisorArr = [];
    for (let i = 2; i <= integer / 2; i++) {
        if (integer % i === 0) {
            divisorArr.push(i);
        }
    }
    return divisorArr.length > 0 ? divisorArr : `${integer} is prime`;
};