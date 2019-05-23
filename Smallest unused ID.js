function nextId(ids) {
    ids = [...new Set(ids)].sort((x, y) => x - y);
    for (let i = 0; i < ids.length; i++) {
        if (i !== ids[i]) {
            return i;
        }
    }
    return ids.length;
}