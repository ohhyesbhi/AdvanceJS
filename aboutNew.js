class Product{
    name;
    price;
    description;

    display(){

    }
}

const p = new Product();

// here new keyword refers to creation of empty object , and when we actually write the name of the class and put pair
// of parenthesis it is nothing but it is calling a constructor of the class 

// what is constructor ?
// so whenever we create an object of a class constructor is the first function called and in above function you can see 
// that in above example we have not defined a contructor function so by default js will define the constructor 


//                                       1)
class Product1{

    constructor(n,p,d){
          this.name = n;   // here this refers to the empty object that we created using new
          this.price = p;
          this.description = d;
    }

    display(){

    }
}

const p1 = new Product1("bag",100,"a cool bag");
console.log(p1)

// o/p -: Product1 { name: 'bag', price: 100, description: 'a cool bag' }



//                                         2)
class Product2{

    constructor(n,p,d){
          this.name = n;   
          this.price = p;
          this.description = d;
          return "abc"                 // whenever we try to return primitive data type the o/p remains the same 
    }

    display(){

    }
}

const p2 = new Product2("bag",100,"a cool bag");
console.log(p1)

// o/p -: Product1 { name: 'bag', price: 100, description: 'a cool bag' }


//                                         3)
class Product3{

    constructor(n,p,d){
          this.name = n;   
          this.price = p;
          this.description = d;
          return {}                 // whenever we try to return non-primitive data type the o/p changes
    }

    display(){

    }
}

const p3 = new Product3("bag",100,"a cool bag");
console.log(p3)

// o/p -: {}


// NOTE -: WE CAN HAVE ONLY ONE CONSTRUCTOR IN JS


//                                        4)

//   function constructors 

function Product4(n,p,d){
          this.name = n;   
          this.price = p;
          this.description = d; 
}

const p4 = new Product4("moto",5000,"hello moto")

console.log(p4)
// o/p -: Product4 { name: 'moto', price: 5000, description: 'hello moto' }

// REASON -: First this kind of syntax is called as function constructor so we can see that normal function can be used
//           simple function , function expression as well as function constructor ,  In JS classes are introduced recent
//           before that this function constructor was used  and all the behaviours reamin the same 