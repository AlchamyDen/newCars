export function getByTitle (list, keyword) {
    console.log("here");
    const search = keyword.trim().toLowerCase();
    if (!search.length) return list;
    return list.filter(item => item.title.toLowerCase().indexOf(search) > -1);
}