// so until now we already have good context about promises . But still writing promise based syntax where we use lot of .then is not that readable
// we can enhance readibilty use async,await

// async Keyword
// async keyword is used with the function to declare that function might be doing some time consuming async task and will always return a promsie

// async function gun(){
//     return 10
// }
// console.log(gun());

// o/p -: Promise { 10 }


// async function task(){
//     return new Promise (function exec(res,rej){
//                setTimeout(()=>{
//                      res(10)
//                },4000)
//     })
// }

// console.log(task())

// In the above piece of code we are returning a promise only , so when we call the task function , it immediately return a pending promise 
// and taht promise is resolved once the res function is called after the timer is completed . We could have achieved it with normal function 
// also but , making something async gives us more power
// NOTE -: Whether you return a non-promise value or Promsie value it always returns you a promise 



// await keyword
// await keyword can only be used inside the async function (there is one exception). What await does it , the moment you right await and then put 
// a value after it , it starts treating that value as promise 

// async function task1(){
//     await 10; // here await will assume 10 to be a promise
// }

// the moment your function hits any await keyword , you will be thrown outside the function just like how JS moves forward when it sees 
// a promise object

async function task2(){
 const a =  await 10;
    console.log(a,"first")
 const b =  await 20;
    console.log(b,"second")
}

const p = task2();

console.log("end")
 
// o/p -:
//           end
//           10 first
//           20 second


// So technically everything working how promises work , the moment you will be thrown outside the function , you will resume
//  executing the remaining code . As i mentioned await treats the value like a promise , so what will happen is  when this promise
// gets resolved , the remaining code of your function waits inside microtask queue 