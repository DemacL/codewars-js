


function onlyDuplicates(str) {
    return [...str].filter(c => [...str].filter(y => y === c).length > 1).join('')
}