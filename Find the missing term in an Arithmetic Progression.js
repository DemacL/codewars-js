var findMissing = function (list) {
    const num = (list[list.length - 1] - list[0]) / list.length;
    let number = list[0] + num;
    for (let i = 1; i < list.length; i++) {
        const element = list[i];
        if (element !== number) {
            return number;
        }
        number += num;
    }
}