const filterFunc = (articleList, id) => {
    const list = Object.values(articleList)
    for (const item of list) {
        if (item.id === id) {
            return item
        }
    }
}

export default filterFunc