// function listSquared(m, n) {
//     const result = [];
//     for (let i = m; i <= n; i++) {
//         let divisors = [];
//         for (let j = 1; j <= i; j++) {
//             if (i % j === 0) {
//                 divisors.push(j)
//             }
//         }

//         divisors = [...new Set(divisors)] 
//         // 不需要去重
//         const sum = divisors.map(x => x * x).reduce((s, n) => s + n)
//         // console.log(i,divisors,sum);
//         if (Number.isInteger(Math.sqrt(sum))) {
//             result.push([i, sum]);
//         }
//     }
//     return result;
// }


// console.log(listSquared(42, 250));
function pickPeaks(a) {
    const r = { pos: [], peaks: [] }
    for (let i = 1; i < a.length - 1; i++) {
        let before = a[i - 1];
        let middle = a[i];
        let after = a[i + 1]

        if (before < middle) {
            if (middle > after) {
                r.pos.push(i);
                r.peaks.push(middle)
            } else if (middle === after) {
                let index = i + 1;
                while (index < a.length) {
                    if (middle > a[index]) {
                        r.pos.push(i);
                        r.peaks.push(middle)
                        break;
                    }
                    if (middle < a[index]) {
                        break;
                    }
                    index++;
                }
            }

        }
    }
    return r;
}

console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]));