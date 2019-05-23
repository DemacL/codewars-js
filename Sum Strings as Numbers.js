function sumStrings(a, b) {
    let arr1 = a.replace(/^0+/, '').split('');
    let arr2 = b.replace(/^0+/, '').split('');
    if (arr2.length < arr1.length) {
        [arr1, arr2] = [arr2, arr1];
    }
    let jw = 0;
    const r = [];
    arr1 = arr1.reverse();
    arr2 = arr2.reverse();
    for (let i = 0; i < arr1.length; i++) {
        const csum = Number(arr1[i]) + Number(arr2[i]) + jw;
        r.push(csum % 10);
        jw = Math.floor(csum / 10);
    }

    for (let i = arr1.length; i < arr2.length; i++) {
        const csum = Number(arr2[i]) + jw;
        r.push(csum % 10);
        jw = Math.floor(csum / 10);
    }
    if (jw === 1) {
        r.push(1);
    }
    // console.table([arr1, arr2,r]);
    // console.log(typeof r.reverse().join(''));
    return r.reverse().join('');
}


console.log(sumStrings('00103', '08567')); // '712577413488402631964821329'

