function titleCase(title, minorWords) {
    let minors = minorWords ? minorWords.toLowerCase().split(' ') : [];
    return title.toLowerCase().split(' ')
        .map(word => minors.some(y => y === word) ?
            word :
            word.replace(/\w/, x => x.toUpperCase()))
        .join(' ')
        .replace(/\w/, x => x.toUpperCase())
}