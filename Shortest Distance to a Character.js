function shortesttoChar(S, C) {
    if (!(S && C)) return [];
    if (!S.includes(C)) return [];
    const charArr = [...S];
    return charArr.map((_, index) => {
        let s1 = S.slice(0, index + 1);
        let s2 = S.slice(index);
        let index1 = [...s1].reverse().indexOf(C);
        let index2 = s2.indexOf(C);
        return (index1 >= 0 && index2 >= 0) ? Math.min(index1, index2) : Math.max(index1, index2)
    })
}
// [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]


console.log(shortesttoChar("lovecodewars", 'e'));