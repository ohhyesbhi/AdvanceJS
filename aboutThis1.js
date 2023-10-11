function fun(){
    console.log(this)
}

// what this refers here ?
// Refers to the global object 

const iphone = {
    name : "iphone",
    price : "100000",
    display: function (){
        console.log(this)
    }
}

const macbook = {
    name : "macbook",
    price : "120000",
    display:()=>{
        console.log(this)
    }
}

iphone.display();   // o/p --> { name: 'iphone', price: '100000', display: [Function: display] }
macbook.display();  // o/p --> {}

// NOTE -: IN ARROW FUNCTIONS THIS DOES NOT REFER TO CALLING CONTEXT , what happens is in arrow functions this is 
//         resolved lexically , in below example you can see that

const iphone = {
    name : "iphone",
    price : "100000",
    display : function (){
        let iphoneRed = {
            name : "Iphone red",
            price : 110000,
            print : ()=>{
                console.log(this)
            }
        }
          iphoneRed.print()
    }
}

iphone.display()

// o/p -: { name: 'iphone', price: '100000', display: [Function: display] }