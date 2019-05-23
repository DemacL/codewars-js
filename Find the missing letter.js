function findMissingLetter(array) { 
    const arr = [...Array(array.length)].map((_, index) => String.fromCharCode(array[0].charCodeAt() + index));
    for (let i = 0; i < arr.length; i++) {
        if (array[i] !== arr[i]) {
            return array[i]
        }
    }
}