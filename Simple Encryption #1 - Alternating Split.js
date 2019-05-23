

function encrypt(text, n) {
    let res = text;
    if (res) {
        while (n-- > 0) {
            res = [...res].filter((_, index) => index % 2 !== 0).join('') +
                [...res].filter((_, index) => index % 2 === 0).join('');
        }
    }

    return res;
}

function decrypt(encryptedText, n) {
    let res = encryptedText;
    if (res) {
        while (n-- > 0) {
            let s1 = res.slice(0, res.length / 2);
            let s2 = res.slice(res.length / 2);
            res = [...s2].map((ch, index) => ch + (s1[index] ? s1[index] : '')).join('');
        }
    }
    return res;
}