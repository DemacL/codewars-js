function upArray(arr) {
    if (arr && arr.length > 0 && arr.every(x => x >= 0 && x <= 9)) {
        let jw = 0;
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] !== 9) {
                arr[i] = arr[i] + 1
                jw = 0;
                break;
            }
            else {
                arr[i] = 0;
                jw = 1;
            }
        }
        if (jw) {
            arr.unshift(1);
        }
        return arr;
    } else {
        return null;
    }
}

upArray([9, 9, 9])