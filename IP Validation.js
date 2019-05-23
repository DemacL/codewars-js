function isValidIP(str) {
    console.log(str);
    const numArr = str.split('.');
    return numArr.length === 4 && numArr.every(item => ((+item) + '').length === item.length && /^\d{1,3}$/.test(item) && 0 <= item && item <= 255);
}


console.log(isValidIP('0.34.82.53')) 