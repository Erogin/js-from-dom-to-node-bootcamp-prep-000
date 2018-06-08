// write your code below!!
var arr = [1, 2, 3, 4, 5];


function miniMaxSum(arr) {
    var sum1 =  arr[0] + arr[1] + arr[2] + arr[3]; // no 4
    var sum2 =  arr[1] + arr[2] + arr[3] + arr[4]; // no 0
    var sum3 =  arr[2] + arr[3] + arr[4] + arr[0]; // no 1
    var sum4 =  arr[3] + arr[4] + arr[0] + arr[1]; // no 2
    var sum5 =  arr[4] + arr[0] + arr[1] + arr[2]; // no 3

    var array = [sum1, sum2, sum3, sum4, sum5];

    var a = Math.min(...array);
    var b = Math.max(...array);

    var answer = [a, b];

    return a + "  " + b;
}

var app = miniMaxSum(arr)

console.log(app);
