function averageString(str) {
    obj = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    strs = str.split(' ');

    return strs.every(s => obj[s] !== undefined) ? obj[Math.floor(strs.map(str => obj[str]).reduce((sum, x) => sum + x) / strs.length)] : 'n/a';
}