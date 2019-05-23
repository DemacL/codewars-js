// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163


choose_best_sum = (biggest, nums, arrs) => {
    let max = 0;// 
    let sortArrs = arrs.sort();
    for (let i = 0; i < arrs.length - nums; i++) {

        let sum = sortArrs.slice(i, nums+i).reduce((x, y) => x + y)
        console.log(i, sum);
        if (sum > biggest) {
            return max
        } else if (sum > max) {
            max = sum;
        }
    }
    return max;
}

console.log(choose_best_sum(163, 3, [50, 55, 56, 57, 58]));