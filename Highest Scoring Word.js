function high(x) {

    let sum = (word) => [...word].reduce((sum, letter) => sum + letter.charCodeAt() - 'a'.charCodeAt() + 1, 0);

    return x.split(' ').sort((word1, word2) => sum(word1) - sum(word2)).pop()
}