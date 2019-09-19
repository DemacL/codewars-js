function palindrome(num) {
    const numStr = num + '';
    if (!(typeof num === 'number' && num > 0)) {
        return 'Not valid'
    }
    return numStr === [...numStr].reverse().join('');
} 