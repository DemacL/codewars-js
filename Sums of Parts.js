function partsSums(ls) {
    const arr = [0];
    let sum = 0;
    for (let i = ls.length - 1; i >= 0; i--) {
        sum += ls[i];
        arr.push(sum);
    }
    return arr.reverse();
}

