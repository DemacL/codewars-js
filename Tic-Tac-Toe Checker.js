function isSolved(board) {
    const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    const arrs = board.reduce((a, c) => [...a, ...c])

    if (wins.some(x => x.every(y => arrs[y] === 1))) {
        return 1;
    } else if (wins.some(x => x.every(y => arrs[y] === 2))) {
        return 2;
    } else if (arrs.some(x => x === 0)) {
        return -1;
    } else {
        return 0;
    }
}

isSolved([[2, 2, 2], [0, 1, 1], [1, 0, 0]])