function add(a, b) {
    let arr1 = a.replace(/^0+/, '').split('').reverse();
    let arr2 = b.replace(/^0+/, '').split('').reverse();
    let jw = 0;
    const r = [];
    let i = 0;
    while (i < arr1.length || i < arr2.length || jw) {
        num1 = arr1[i] ? Number(arr1[i]) : 0;
        num2 = arr2[i] ? Number(arr2[i]) : 0;
        r.push((num1 + num2 + jw) % 10)
        jw = Math.floor((num1 + num2 + jw) / 10);
        i++;
    }
    return r.reverse().join('');
}

console.log(sumStrings('00103', '08567')); // '712577413488402631964821329'

