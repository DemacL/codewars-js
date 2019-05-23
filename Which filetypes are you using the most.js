function solve(files) {
    const result = [...files.map(file => file.match(/\.\w+$/)[0]).reduce((map, x) => { map.set(x, (map.get(x) || 0) + 1); return map }, new Map())].sort((x, y) => x[1] - y[1])
    const max = Math.max(...result.map(x => x[1]));
    return result.filter(x => x[1] === max).map(x => x[0]).sort();
}