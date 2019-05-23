function towerBuilder(nFloors) {
    const res = [];
    let num = nFloors;
    while (num) {
        res.unshift(`${' '.repeat(nFloors - num)}${'*'.repeat(2 * num - 1)}${' '.repeat(nFloors - num)}`)
        num--;
    }
    return res;
}

console.log(towerBuilder(100));