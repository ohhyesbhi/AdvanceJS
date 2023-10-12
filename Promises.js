// promises are nothing but the objects that get returned immediately when we call them and Promises actually store the data which we will get in future and are native to JS (Synchronous in nature)
// creation of promise object is synchronous in nature

// A) Promise have a state property

// there are three states in promises 
// 1) pending --> By default the state of promise will be pending
// 2) Fullfilled  --> Once the operation completed successfully then it will be in fullfilled state 
// 3) Rejected  --> If the operation is not completed successfully then it will be in rejected state 

//  B) Promise have a value property

// At pending state --> value will be undefined
// At fullfilled or Rejected state --> value might change

// How to create a Promise?


new Promise(function (resolve,reject){

// the moment we call resolve the promise will go from pending state to fullfilled state
// the moment we call reject the promise will go from pending state to rejected state

// once the promise is resolved or rejected the value property will get updated with the value which we are going to send it in argument
// Ex -: resolve(10) --> Here we can see that promise has been fullfilled and the value property is assigned with value 10

    


})