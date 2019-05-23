var moveZeros = function (arr) {
    const r = arr.filter(x => x !== 0);
    return r.concat(...new Array(arr.length - r.length).fill(0))
}



console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));