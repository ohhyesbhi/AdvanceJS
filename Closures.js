function process(){

    let i = 0;

    function innerProcess(){
        i+=1;
       return i    
    }

    return innerProcess;
}


const res = process()

console.log(res())   // o/p-: 1
console.log(res())   // o/p-: 2
console.log(res())   // o/p-: 3

// So whenever we call res() the function process() has been removed from the callstack  and now you can get the question that how the value is 
// remembered , so there is a property called as CLOSURE which will be having a key i with value 0 , So what this closure proprerty does is it
// remembers all those variables that are getting accessed inside your function innerProcess() whose scope might be in the function or might be outside of the 
// function it remembers the memory location of all of those variables

