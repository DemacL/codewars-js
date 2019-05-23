function toCamelCase(str) {
    return str.replace(/[-_](\w)/g, (s, x) => x.toUpperCase())
}