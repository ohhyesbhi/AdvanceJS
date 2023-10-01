

// 1) Inversion of control 
// 2) Callbackhell --> Causes readibility problem


// Inversion of control -: As we know sort function takes a call back function and we can give that assurity that this call back function
//                         is called every time because it is internally done by javascript members now suppose a function code has been
//                         written by some developer of our team 



function doTask(fn , x){
   // implementation of this function is done by team A 

   fn(x*x)  // calling the callback function 
   
}


// and now we have team B which is working on this callback

doTask(function exec(num){
  console.log(num)
},5)

// and let's say suppose a new intern comes and he removes the callback function then it will be problematic right like we are not 
// actually recieving the response  or he might call the callback function twice which is actually a BIG problem 


