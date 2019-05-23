function clean_string(s) {
    return [...s].reduce((arr, x) => {
        x === '#' ? (arr.length > 1 ? arr.pop() : '') : arr.push(x)
        return arr;
    }, []).join('')
};