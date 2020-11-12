function checkPara(str) {
    const paraArr = [...str];
    let paraStack = [];
    for (let i = 0; i < paraArr.length; i++) {
        if (paraArr[i] === '(') {
            paraStack.push(paraArr[i]);
        } else {
            if (paraStack.length === 0) return false;
            paraStack.pop();
        }
    }
    return paraStack.length === 0;
}
console.log(checkPara('()))'));

// ((()) false


// (())()() true


// )))(( false