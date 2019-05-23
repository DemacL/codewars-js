function indexEqualsValue(a) {

    for (let i = 0; i < a.length; i++) {
        if (i === a[i]) {
            return i
        } else if (a[i] > i) {
            i = a[i];
            console.log(i);
        }
    }

    return -1;

}