function toWeirdCase(s) {
    return s.toLowerCase().split(' ').map(x => [...x].map((x, i) => i % 2 ? x : x.toUpperCase()).join('')).join(' ')
}