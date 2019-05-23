let add = (x) => {

    let items = [x];

    let adder = () => {


        let addAll = (x) => {
            items.push(x);
            return addAll
        }

        addAll.toString = () => {
            this.items.reduce((m, n) => m + n);
        }

        return addAll
    }



    return adder();
}


console.log(add(1)(2)(3)(4)(5));