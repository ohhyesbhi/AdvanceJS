// ABSTRACTION refers to the concept of hiding complex implementation details and showing only the necessary
// features or functionalities to users or other parts of the code.
// ACCESS MODIFIERS helps what should be visible outside of class and what should be visible inside class

// If we want to make it private first if all we have to declare it and then we need to prepend with an # tag
// 

class Product2{
         #name;
    constructor(n,p,d){
          this.#name = n;   
          this.price = p;
          this.description = d;
    }

    display(){
    }
}

const p2 = new Product2("bag",100,"a cool bag");
// console.log(p2)

// o/p -: Product2 { price: 100, description: 'a cool bag' }
// now you can see that the name is not getting printed in output as well

p2.name = -1;
// console.log(p2)

// o/p -: Product2 { price: 100, description: 'a cool bag', name: -1 }
// ypu can see that name has now got -1 as value if you want to avoid sunch things then


class Product3{
    #name;
constructor(n,p,d){
     this.#name = n;   
     this.price = p;
     this.description = d;
}

setName(n){
      if(typeof(n) != "string" ){
        console.log("invalid name passed")
        return
      }
      this.#name = n;
}

display(){
    console.log(this.#name,this.price,this.description)
}
}

const p3 = new Product3("dell","50000","this is laptop");

 p3.setName("hp")
 p3.display()

 // o/p -: hp 50000 this is laptop

 p3.setName(-1)
 p3.display()

// o/p -: invalid name passed
//        hp 50000 this is laptop