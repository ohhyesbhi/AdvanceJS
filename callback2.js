let arr = [100,5,4,200,14,0];


arr.sort(function (a,b){
    return a-b
})                 // sort also is an higher order function beacuse it actually takes COMPARATOR FUNCTION inside the arguments.


console.log(arr)