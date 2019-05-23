function rot(strng) {
    returnstrng
        .split('\n')
        .reduce((arr, s) => {
            arr.unshift([...s].reverse().join(''))
            return arr;
        }, []).join('\n')
}
function selfieAndRot(strng) {
    const len = strng.split('\n').length;
    return [...strng.split('\n'), ''].join('.'.repeat(len) + '\n') +
        '.'.repeat(len) + [...rot(strng).split('\n')].join('\n' + '.'.repeat(len))

}
function oper(fct, s) {
    return fct(s);
}