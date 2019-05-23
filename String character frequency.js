function solve(s) {
    let charCountMap = [...[...s].reduce((map, item) => { map.set(item, (map.get(item) || 0) + 1); return map }, new Map())]
    charCountMap.sort((x, y) => y[1] - x[1])
    console.log(charCountMap);
    charCountMap[0][1] = --charCountMap[0][1];
    console.log(charCountMap);
    return new Set(charCountMap.map(x => x[1]).filter(x => x !== 0)).size === 1
};