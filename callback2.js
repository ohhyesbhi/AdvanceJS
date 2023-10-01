let arr = [100,5,4,200,14,0];


arr.sort(function (a,b){
    return a-b
})                 // sort also is an higher order function beacuse it actually takes COMPARATOR FUNCTION inside the arguments what it does is instead of
                   // sorting in form of lexical order it sorts numerically .


console.log(arr)