const myReduce = (arr, callbackFunc, initialValue) => {
    if(!Array.isArray(arr) || !arr.length || typeof callbackFunc !== 'function') {
        return [];
    } else {
        let hasInitialValue = initialValue !== undefined;
        let value = hasInitialValue ? initialValue : arr[0];

        for(let i = hasInitialValue ? 0 : 1; i < arr.length; i++) {
            value = callbackFunc(value, arr[i]);
        }
        return value;
    }
};

const arr = [1, 2, 3];

const func = (value, elem) => {
    return value + elem;
};

console.log(myReduce(arr, func));
console.log(myReduce(arr, func, 8));
