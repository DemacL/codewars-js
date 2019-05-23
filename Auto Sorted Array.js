class SortedArray {

    constructor(dir, init) {
        console.log(dir, init);
        if (!(dir === 'asc' || dir === 'desc')) {
            throw new Error('dir error')
        }
        this.dir = dir;
        this.arr = this.init || [];
    }

    insert(...values) {
        this.arr = [...this.arr, ...values].sort((x, y) => this.dir === 'desc' ? x - y : y - x)
        return this.arr.length
    }

    pop() {
        return this.arr.pop();
    }

    shift() {
        return this.arr.shift();
    }

    toString() {
        console.log(this.arr);
        return this.arr;
    }


    valueOf() {
        console.log(this.arr);
        return this.arr
    }
}

console.log()
