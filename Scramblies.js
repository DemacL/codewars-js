function scramble(str1, str2) {
    //code me
    // console.log(str1, str2);
    let result = true;
    // const obj1 = [...str1].reduce((obj, c) => { obj[c] = obj[c] ? obj[c] + 1 : 1; return obj }, {})
    const obj1= {}
    for (let i = 0; i < str1.length; i++) {
        const c = str1[i];
        obj1[c] = obj1[c] ? obj1[c] + 1 : 1;
    }
    const obj2= {}
    for (let i = 0; i < str2.length; i++) {
        const c = str1[i];
        obj2[c] = obj2[c] ? obj2[c] + 1 : 1;
    }
    // const obj2 = [...str2].reduce((obj, c) => { obj[c] = obj[c] ? obj[c] + 1 : 1; return obj }, {})
    // console.log(obj1, obj2);
    for (let k of Object.keys(obj2)) {
        if (!obj1[k] || obj1[k] < obj2[k]) {
            result = false;
            break;
        }
    }
    return result;
}

console.time();
console.log(scramble('katas', 'steak'))
console.timeEnd();
