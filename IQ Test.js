function iqTest(numbers) {
    const numArr = numbers.split(' ');
    const findOdd = numArr.filter(x => x % 2 === 0).length > 1; // 是否是找奇数 
    return (findOdd ? numArr.indexOf(numArr.filter(x => x % 2 !== 0)[0]) : numArr.indexOf(numArr.filter(x => x % 2 === 0)[0])) + 1
}