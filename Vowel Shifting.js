function vowelShift(text, n) {
    if (!text) return text
    const arr = text.match(/[aeiou]/ig);
    const length = arr.length;
    const shiftRight = (n % length + length) % length;
    let i = 0;
    return text.replace(/[aeiou]/gi, () => arr[(length - shiftRight + i++) % length])
}