// function mirror(text) {
//     let strs = text.split(/\s+/);
//     let width = Math.max(...strs.map(s => s.length)) + 4;
//     strs = strs.map(s => s.split('').reverse().join('').padStart(s.length + 2, '* ').padEnd(width - 1, ' ') + '*');
//     strs.push('*'.repeat(width));
//     strs.unshift('*'.repeat(width));
//     let result = strs.reduce((x, y) => x + y + '\n', '');
//     result = result.substring(0, result.length - 1);
//     return result;
// }

// mirror('Hello Wor');

function findOdd(A) {
    const nums = [...new Set(A)]
    let result = 0;
    for (item of nums) {
        if (A.filter(x => x === item).length % 2 === 1) {
            result = item;
            break;
        }
    }
    return result;
}