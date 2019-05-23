// const iterator = createIterator(['One', , 'Two']);

const createIterator = (a) => {

    array = [...a];
    index = 0;

    next = function () {
        let obj = { value: array[index], done: index === array.length }
        index = index === array.length ? index : index + 1;
        return obj
    }

    return {
        get index() {
            return index;
        },
        next
    }

};

const iterator = createIterator(['One', , 'Two']);
console.log(iterator.index);
console.log(iterator.next());

console.log(iterator.index);
console.log(iterator.next());
console.log(iterator.index);
console.log(iterator.next());
console.log(iterator.index);
console.log(iterator.next());
console.log(iterator.index);
console.log(iterator.next());
console.log(iterator.index);
console.log(iterator.next());
console.log(iterator.index);
console.log(iterator.next());
console.log(iterator.index);
const iterato1r = createIterator(['One', , 'Two']);
console.log('seconde', iterato1r.index);


function upArray(arr) {
    return arr ? ((+arr.join('') + 1) + '').split('').map(x => +x) : null
}