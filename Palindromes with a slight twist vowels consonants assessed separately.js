//   return "both";
//   return "vowel";
//   return "consonant";
//   return "neither";

function palindrome(str) {
    const lowerStr = str.toLowerCase();
    const vowels = lowerStr.match(/[aeiou]/g);
    const consonants = lowerStr.match(/[b-df-hj-np-tv-z]/g);
    const vowelsPalindromes = vowels.join('') === vowels.reverse().join('');
    const consonantsPalindromes = consonants.join('') === consonants.reverse().join('');
    if (vowelsPalindromes && consonantsPalindromes) {
        return 'both';
    } else if (vowelsPalindromes) {
        return "vowel";
    } else if (consonantsPalindromes) {
        return "consonant";
    } else {
        return "neither";
    }
}



