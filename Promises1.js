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
console.log(ans)