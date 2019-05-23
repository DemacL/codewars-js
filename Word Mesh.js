function wordMesh(arr) {
    let result = '';
    for (let i = 0; i < arr.length - 1; i++) {
        const element = arr[i];
        let all = false;
        for (let j = 0; j < element.length; j++) {
            const subStr = element.slice(j);
            if (arr[i + 1].startsWith(subStr)) {
                result += subStr
                all = true;
                break;
            }
        }
        if (!all) {
            return 'failed to mesh'
        }
    }
    return result;
}