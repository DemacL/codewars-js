
/**
 *https://www.codewars.com/kata/559536379512a64472000053
 *
 * @param {*} s
 * @param {*} n
 * @returns
 */
function playPass(s, n) {
    return [...s].map((char, index) => {
        if (/[A-Z]/.test(char)) {
            const shiftChar = String.fromCharCode(65 + (char.charCodeAt() - 65 + n) % 26);
            return index % 2 ? shiftChar.toLowerCase() : shiftChar;
        } else if (/[0-9]/.test(char)) {
            return 9 - char
        } else {
            return char;
        }
    }).reverse().join('')

}