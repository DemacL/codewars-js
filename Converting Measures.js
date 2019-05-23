function convertRecipe(recipe) {
    return recipe.replace(/(\S+)\s(tbsp|tsp)\s/g,
        (x, y, z) => {
            const numberArr = y.split('/');
            let number = numberArr[0]
            if (numberArr.length === 2) {
                number = numberArr[0] / numberArr[1]
            }
            return `${x}(${Math.ceil(number * (z === 'tbsp' ? 15 : 5))}g) `
        })
}