function rgb(r, g, b) {
    return [r, g, b].reduce((str, item) => str + (item > 255 ? 255 : (item < 0 ? 0 : item)).toString(16).toUpperCase().padStart(2, 0),'')
}