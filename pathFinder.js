x = decodeURI('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue').split('&').map(item => item.split('='))
console.log(x);


function scramble(str1, str2) {
    //code me
    let result = true;
    const obj1 = [...str1].reduce((obj, c) => { obj[c] = obj[c] ? obj[c] + 1 : 1; return obj }, {})
    const obj2 = [...str2].reduce((obj, c) => { obj[c] = obj[c] ? obj[c] + 1 : 1; return obj }, {})
    for (k of Object.keys(obj2)) {
        if (obj1[k] >= obj2[k]) {
            result = false;
            break;
        }
    }

    return result;
}
