function solution(number) {
    let romanstr = '';
    const res = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    const map = [['M', 1000],  ['C', 100], ['X', 10]];// ['D', 500],  ['L', 50],
    // const arr = [1000,100,10];
    for (let i = 0; i < map.length; i++) {
        let n = Math.floor(number / arr[i][1]); // 9
        if (n > 0) {
            romanstr += (n <= 3 ? map[i][0].repeat(n) : (res[n] + map[i][0]));
            number = number % map[i][1];
        }
    }
    romanstr += res[number];

    return romanstr;
}

solution(1990);