function rot13(message) {
    const getChat = (c, letter) => String.fromCharCode((c.charCodeAt() - letter.charCodeAt() + 13) % 26 + letter.charCodeAt());
    return [...message].map(c =>
        /[a-z]/.test(c) ? (getChat(c, 'a')) :
            (/[A-Z]/.test(c) ? getChat(c, 'A') : c)).join('')
}
