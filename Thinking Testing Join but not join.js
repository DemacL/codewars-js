Array.prototype.Join = function (para) {
    return this.reduce((arr, item, index) => {
        arr = arr.concat(item, index === this.length - 1 ? [] : para);
        return arr
    }, [])
}