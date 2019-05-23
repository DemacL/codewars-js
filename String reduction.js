function solve(a, b) {
    const getCharCountObj = (str) => {
        return [...str].reduce((obj, c) => { obj[c] = (obj[c] || 0) + 1; return obj }, {})
    }
    const obj1 = getCharCountObj(a);
    const obj2 = getCharCountObj(b);
    if (Object.keys(obj2).every(key => obj1[key] > 0 && obj1[key] >= obj2[key])) {
        return Object.keys(obj1).reduce((sum, x) => sum + obj1[x] - (obj2[x] || 0), 0)
    } else {
        return 0;
    }

};