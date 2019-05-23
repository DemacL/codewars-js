function paginate(arr) {
    const sortarr = arr.sort((x, y) => x - y);
    const res = [];
    for (let i = 0; i < sortarr.length; i++) {
        if (sortarr[i] + 1 !== sortarr[i + 1]) {
            res.push(sortarr[i]);
        } else {
            const start = sortarr[i];
            i++;
            while (sortarr[i] + 1 === sortarr[i + 1]) {
                i++;
            }
            res.push(`${start}-${sortarr[i]}`);
        }
    }
    return res.join(', ');
}


console.log(paginate([4, 20, 3, 19, 2, 23, 1]))