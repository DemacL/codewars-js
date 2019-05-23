function warnTheSheep(queue) {
    const wolfIndex = queue.indexOf('wolf');
    if (wolfIndex === queue.length - 1) {
        return 'Pls go away and stop eating my sheep';
    } else {
        return `Oi! Sheep number ${queue.length - wolfIndex - 1}! You are about to be eaten by a wolf!`
    }

}