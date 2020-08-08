function a() {
    return arguments;
}

var str = 'Hello World';

var arr1 = [...str],
    arr2 = [...'Hello World'],
    arr3 = new Array(...str),
    arr4 = a(...str);

console.log(arr1, arr2, arr3, arr4);