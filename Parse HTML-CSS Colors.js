function parseHTMLColor(color) {
    const getColors = (name) => PRESET_COLORS[name];

    if (color[0] === '#') {
        color = color.slice(1);
        if (color.length === 3) {
            color = color.replace(/\w/g, x => x + x)
        }
        let props = ['r', 'g', 'b'];
        return color.match(/../g).reduce((obj, item, index) => { obj[props[index]] = Number.parseInt(item, 16); return obj }, {})
    } else {
        return parseHTMLColor(getColors(color.toLowerCase()));
    }
}
parseHTMLColor('#80FFA0')