function sequence(fun) {
    return {
        take(num) {
            return Array.from(Array(num)).map((_, index) => fun(index))
        },

        takeWhile(func) {
            let i = 0;
            const res = [];
            let ele = fun(i);
            while (func(ele)) {
                res.push(ele);
                i++;
                ele = fun(i);
            }
            return res;
        }
    }
}