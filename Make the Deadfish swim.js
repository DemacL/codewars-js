// Return the output array, and ignore all non-op characters
function parse(data) {
    let num = 0;
    return [...data].reduce((arr, item) => {
        switch (item) {
            case 'i':
                num++;
                break;
            case 's':
                num *= num;
                break;
            case 'd':
                num--;
                break;
            case 'o':
                arr.push(num)
                break;
        }
        return arr;
    }, [])
}

console.log(parse('iiisdoso'))
