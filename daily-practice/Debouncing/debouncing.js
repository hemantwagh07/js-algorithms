// Create a debounce function which will get 

document.getElementById('search').addEventListener('keyup', debounce(function (e) {
    searchAPI(e)
}, 3000))

function searchAPI(arg) {
    console.log('in searchAPI', arg);
}

function debounce(fn, delay) {
    let timer;
    return function () {
        let self = this;
        let arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(arg)
        }, delay)
    }
}

//let searchData = debounce(searchAPI, 3000);