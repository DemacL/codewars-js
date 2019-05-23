function formatWords(words) {
    const wordsArr = (words || []).filter(word => /^[a-zA-Z]+$/.test(word));
    const last = wordsArr.pop() || '';
    return wordsArr.join(', ') + ((wordsArr.length > 0) ? ' and ' : '') + last
}