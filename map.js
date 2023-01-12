const myMap = (arr, callbackFunc) => {
    if(!Array.isArray(arr) || !arr.length || typeof callbackFunc !== 'function') {
        return [];
    } else {
        const result =  [];

        for(let i = 0; i < arr.length; i++) {
            result.push(callbackFunc(arr[i]))
        }

        return result;
    }
};

const func = (elem) => {
    return elem * 2;
};

const arr = [1, 2, 3];

console.log(myMap(arr, func));
console.log(Array.isArray(arr), !arr.length, typeof func);