function duplicateEncode(word) {
    const str = word.toLowerCase();
    const dic = {};
    for (let i = 0; i < str.length; i++) {
        c = str[i];
        dic[c] = dic[c] ? dic[c] + 1 : 1;
    }
    return [...str].map(c => dic[c] > 1 ? ')' : '(').join('');
}
