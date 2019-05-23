const rps = (p1, p2) => {
    console.log(p1, p2);
    const arr = ['rock', 'scissors', 'paper']
    let index1 = arr.indexOf(p1);
    let index2 = arr.indexOf(p2);

    if (p1 === p2) {
        return 'Draw!'
    } else if ((index1 === 0 && index2 === 1) || (index1 === 1 && index2 === 2) || (index1 === 2 && index2 === 0)) {
        return 'Player 1 won!'
    } else {
        return 'Player 2 won!'
    }
};