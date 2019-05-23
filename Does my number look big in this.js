function narcissistic(value) {
    const length = ('' + value).length;
    return [...('' + value)].reduce((sum, num) => sum + Math.pow(num, length), 0) === value;
}
