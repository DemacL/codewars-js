function reduceByRules(numbers, rules) {
    return numbers.reduce((a, b, index) => index > 0 ? rules[(index - 1) % rules.length](a, b) : b, 0)
}