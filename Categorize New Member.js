function openOrSenior(data) {
    return data.map(item => item[0] >= 55 && item[1] > 7 ? 'Senior' : 'Open');
}