// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function sigma(num) {
    var sum=0;
    for (i=0; i<=num; i++){
        sum +=i;
    }
    console.log(sum);
    return sum;
}
sigma(3);
sigma(5);
sigma(7);
// 
// 
function factorial(num){
    var sum=1;
    for (i=1; i<=num; i++){
        sum *=i;
    }
    console.log(sum);
    return sum;
}
factorial(3)
factorial(5)
factorial(7)
// 
// 
function fibonacci(num) {
    var a = 0;
    var b = 1;
    var c =1;
    for(i=2; i<=num; i++) {
        c = a +b;
        a =b;
        b = c;
    }
    return c;
}
x=fibonacci(1)
console.log(x)
y=fibonacci(3)
console.log(y)
z=fibonacci(6)
console.log(z)
// 
// 
function secondtolast(arr) {
    if(arr.length<2){
        return null;
    }
    else {
        return arr[arr.length -2];
    }
}
x= secondtolast([1])
console.log(x)
y= secondtolast([1,2,3,4,5])
console.log(y)
// 
// 
function nthtolast(arr,n) {
    if(arr.length<n){
        return null
    }
    else {
        return arr[arr.length-n]
    }
}
x= nthtolast([1],2)
console.log(x)
y= nthtolast([1,2,3,4,5],3)
console.log(y)
// 
// 
function secondlargest (arr){
    var max= arr[0]
    var secl= arr[0]
    for(i=0; i<arr.length;i++){
        if(arr.length<2){
            return null;
        }
        else if (max<arr[i]){
            secl = max;
            max=arr[i];
        }
        else if(arr[i]>secl & arr[i]<max) {
            secl = arr[i];
        }
    }
    return secl
}
x = secondlargest([1])
console.log(x)
y = secondlargest([1,10,3,8,5,6,7])
console.log(y)
// 
// 
function doubletrouble(arr) {
    var newarr = [];
    var n = 0;
    for (var i = 0; i < arr.length; i++) {
        while (n < 2) {
            newarr.push(arr[i]);
            n++;
        }
        n = 0;
    }
    return newarr
}
x=doubletrouble([4, "Ulysses", 42, "false"]);
console.log(x)