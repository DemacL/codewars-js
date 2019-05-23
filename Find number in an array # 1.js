function duplicateOrUnique(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const duplicateNum = sum - arr.length * (arr.length - 1) / 2;
    return duplicateNum > 0 ? duplicateNum : ((1 + (arr.length + 1) / 2) * (arr.length + 1) / 2 - sum);
}

function dataReverse(data) {
    return data.length > 0 ? data.join('').match(/.{8}/g).reverse().join('').split('').map(x => +x) : [];
}