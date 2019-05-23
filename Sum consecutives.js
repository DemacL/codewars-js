list = [1, 4, 4, 4, 0, 4, 3, 3, 1];
list.reduce((arr, x, index) => { x === list[index - 1] ? arr[arr.length - 1] += x : (arr[arr.length] = x); return arr }, [])


function sumConsecutives(s) {
    return s.reduce((arr, x, index) => { x === s[index - 1] ? arr[arr.length - 1] += x : (arr[arr.length] = x); return arr }, [])
}