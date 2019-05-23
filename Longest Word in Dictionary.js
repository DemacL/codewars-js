function findLongestWord(str, arr) {
    return arr.filter(item => {
        const charArr = [...item];
        let fromIndex = 0;
        for (let i = 0; i < charArr.length; i++) {
            fromIndex = str.indexOf(charArr[i], fromIndex === 0 ? 0 : fromIndex + 1);
            if (fromIndex === -1) {
                return false;
            }
        } return true;
    }).sort((x, y) => {
        if (x.length !== y.length) {
            return y.length - x.length
        } else {
            return x.localeCompare(y)
        }
    })[0] || ''
}
