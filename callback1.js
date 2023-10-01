// A function which take another function as argument.

function fun(x,fn){
    console.log(x)
    fn()
}


fun(10, function exec(){
    console.log("i am a function passed to higher order function")
})

