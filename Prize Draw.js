function rank(st, we, n) {
    // your code
    if (st.trim() === '') {
        return "No participants"
    }

    const sortMap = st.split(',')
        .map((name, index) =>
            [name,
                (name.length + [...name.toLowerCase()]
                    .reduce((sum, char) =>
                        sum + char.charCodeAt() - 96, 0)) * we[index]])
        .sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0]))
    return sortMap[n - 1] ? sortMap[n - 1][0] : "Not enough participants"
}