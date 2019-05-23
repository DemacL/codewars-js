function isValidWalk(walk) {
    if (walk.length != 10) {
        return false
    }

    let w = walk.join('');
    while (/ns|sn|ew|ew'/.test(w)) {
        w = w.replace(/ns|sn|ew|we'/, '')
    }
    return w.length === 0;
}