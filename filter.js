const myFilter = (arr, filterFunc) => {
    if(!Array.isArray(arr) || !arr.length || typeof filterFunc !== 'function') {
        return [];
    } else {
        const result = [];

        for(let i = 0; i < arr.length; i++) {
            if(filterFunc(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    }
};

const arr = ['a', 1, 'b', 2];

const func = (elem) => {
    if(typeof elem !== 'number') {
        return;
    }
    return elem;
};

console.log(myFilter(arr, func));