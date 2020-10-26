var objectToFlattern = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: 4
        }
    },
    g: {
        h: 5
    }
}
/* Output
if key is not leaf node append its child using _
{ a: 1, b: 2, c_d: 3, c_e_f: 4, g_h: 5 }
*/

function traverseAndFlatten(obj, parent, flattenObj = {}) {
    for (let key in obj) {
        let propName = parent ? parent + '_' + key : key;
        if (typeof (obj[key]) === 'object') {
            traverseAndFlatten(obj[key], propName, flattenObj);
        } else {
            flattenObj[propName] = obj[key];
        }
    }
    return flattenObj;
}

traverseAndFlatten(objectToFlattern);