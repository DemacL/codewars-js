function sum(...arrs) {
    let func = null;
    if (typeof arrs[arrs.length - 1] === 'function') {
        func = arrs.pop();
    }
    const mlen = Math.max(...arrs.map(x => x.length));
    const carr = arrs.reduce((tarr, x, index) => {
        for (let i = 0; i < mlen; i++) {
            tarr[i] = [...tarr[i], x[i] || 0]
        }
        return tarr
    }, Array(mlen).fill([]));
    return carr.map(x =>
        func ? func(...x) : x.reduce((sum, x) => sum + x, 0))
        .reduce((sum, y) => sum + y, 0)


}