const iphone = {
    name : "iphone",
    price : "100000",
    display(){
        console.log(this)
    }
}

const macbook = {
    name : "macbook",
    price : "120000",
    display(){
        console.log(this)
    }
}

macbook.display()

// o/p -: { name: 'macbook', price: '120000', display: [Function: display] }

iphone.display()

// o/p -: { name: 'iphone', price: '100000', display: [Function: display] }

// here actually this refers to calling context as we can see , iphone is a 
// calling context that i am calling display in the context of iphone.

// now check who is calling display ? iphone is calling display so this will point to iphone