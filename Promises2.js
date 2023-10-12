  //    consumption of promise 

  // when we think what to do after promise is rejected or fullfilled and there the concept of consumption of promises comes
// so with our promise object there function called as then which takes two parameters , first parameter is fullfillment handler and second id
// rejection handler and in these handlers we will implement like what to do if the promise is fullfilled or rejected


function getRandomInt(max){
    return  Math.floor(Math.random() * max)
}


function createPromise(){
    return new Promise(function (resolve,reject){
        for(let i = 0 ; i < 10000000 ; i++){}
        let x = getRandomInt(10);
        if(x%2 == 0){
            resolve(x)
        }else{
            reject(x)
        }
}
    )
}

let ans = createPromise()

ans.then(function fullfillHandler(value){
   console.log("promise is fullfilled",value)
} , 
function RejectionHandler(value){
   console.log("promise is rejected",value)
})

//o/p -: promise is fullfilled 0