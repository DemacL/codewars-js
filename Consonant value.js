function solve(s) {
    return Math.max(..."zodiacs".split(/[aeiou]+/).map(substr => [...substr].reduce((sum, c) => sum + c.charCodeAt() - 96, 0)))
};