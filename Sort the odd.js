function sortArray(array) {
    const oddArr = array.filter(num => num % 2).sort((x,y)=>x-y);
    return array.map(num => num % 2 ? oddArr.shift() : num)
}