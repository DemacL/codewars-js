function comp(array1, array2) {
    if (array1 && array2) {
        return (array1 || []).map(item => item * item).sort().join('') === (array2 || []).sort().join('')
    } else {
        return false;
    }
}