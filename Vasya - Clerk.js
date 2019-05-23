function tickets(peopleInLine) {
    let has = [];
    for (let i = 0; i < peopleInLine.length; i++) {
        const current = peopleInLine[i];
        switch (current) {
            case 50:
                let x = has.findIndex(x => x === 25)
                if (x >= 0) {
                    has.splice(x, 1, current)
                } else {
                    return 'NO';
                }
                break;
            case 100:
                const qnum = has.filter(x => x === 25).length;
                const hnum = has.filter(x => x === 50).length;
                if (qnum >= 1 && hnum >= 1) {
                    has = has.sort((x, y) => x - y).slice(2)
                    let x = has.findIndex(x => x === 50)
                    has.splice(x, 1, current)
                } else if (qnum >= 3) {
                    has = has.sort((x, y) => x - y).slice(3)
                    has.push(current);
                } else {
                    return 'NO';
                }
                break;
            default:
                has.push(current);
                break;
        }
    }
    return 'YES'
}