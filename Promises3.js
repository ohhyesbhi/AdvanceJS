function createPromise(){
  return new Promise ( function exec(resolve,reject){
     console.log("resolving the promsie")
     resolve("Done")
  })
}


setTimeout(function fullfillHandler(){
    console.log("timer completed")
})

let p =createPromise();

p.then(function fullfillHandler(value){
    console.log("we have fullfilled with a value",value)
})

console.log("ending")

// o/p -: resolving the promsie
//        ending
//        we have fullfilled with a value Done
//        timer completed

// REASON -: If any point of time if event loop has a choise to to pick from microtask queue or callback queue then it ALWAYS give preference to 
//           microtask queue 