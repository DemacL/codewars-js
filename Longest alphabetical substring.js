function longest(str) {
    [...'asdfaaaabbbbcttavvfffffdf'].reduce((arr, x) => {
        if (arr.length === 0 || arr[arr.length - 1].charCodeAt() <= x.charCodeAt()) {
            arr.push(x)
        }
        return arr
    }, [])
}