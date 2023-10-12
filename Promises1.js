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
// console.log(ans)

function createPromise1(){
    return new Promise(function (resolve,reject){
        for(let i = 0 ; i < 10000000 ; i++){}
        let x = getRandomInt(10);
        if(x%2 == 0){
            resolve(x)
            resolve(10);
            console.log("resolving again")
        }else{
            reject(x)
            reject(10);
            console.log("rejecting again")
        }
}
    )
}

let ans1 = createPromise1()
console.log(ans1)

// o/p -: resolving again 
//        Promise { 4 }

//REASON-: So promise is resolved or Rejected only once 