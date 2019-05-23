

function dup(arrs) {
    return arrs.map(str => [...str].reduce((s, c) => s + (s[s.length - 1] === c ? '' : c), ''))
};