function reverseWords(str) {
    return str.split(' ').map(word => [...word].reverse().join('')).join(' ');
}