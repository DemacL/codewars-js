/**
 * 根据input内容从dictionary搜索符合自动填充的数据项 取前五项
 * 不考虑大小写 返回的原来数据
 * @param {*} input 字符串
 * @param {*} dictionary 字符串数组
 * @returns
 */
function autocomplete(input, dictionary) {
    const vaildInput = input.replace(/[^a-zA-Z]/g, '').toLowerCase()
    return dictionary.filter(item =>
        item.toLowerCase().startsWith(vaildInput)
    ).slice(0, 5)
}