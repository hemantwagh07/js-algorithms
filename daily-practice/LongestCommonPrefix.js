const longestCommonPrefix = function (strs) {
    const shortestStr = strs.sort((a, b) => {
        return a.length > b.length ? 1 : -1;
    })[0]; // Get shortest string to compare with all other

    if (strs.length <= 0 || shortestStr.length <= 0) return "";

    let prefix = '';
    for (let i = 1; i <= shortestStr.length; i++) {
        let checkPrefix = shortestStr.slice(0, i); // This will give incremental string

        let checkEvery = strs.every(str => {
            return str.startsWith(checkPrefix);
        });

        if (checkEvery) {
            prefix = checkPrefix;
        } else {
            break;
        }
    }

    return prefix;

};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));