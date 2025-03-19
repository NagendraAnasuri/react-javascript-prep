## Classes

* Classes are used to create Objects
* Classes are used to create structures.
* Classes will simplify the creation of objects 
* After creating the class, we need to give the structure, which tells us what an object is needed, which is created using this class. For this, we use Constructor. in this, we have to initialise the object properties
```js
class mobiles {
    constructor(n, p, r){
        this.name = n;
        this.price = p;
        this.ram = r;
    }

    updateRam(uram){
        this.ram = uram;
    }
}

let m1 = new mobiles("realme 8", 16000, "6gb");
let m2 = new mobiles("redme", 10000, "4gb");

console.log(m2); //mobiles {name: "redme", price: 10000, ram: "4gb"}
m2.updateRam("6gb");
console.log(m2); //mobiles {name: "redme", price: 10000, ram: "6gb"}
```

### Getters and Setters

In classes we can use Getters and Setters
InOrder to overcome some complications (like, price in consrtuctor should not be less than 0, so based on the condition, we have to initialize the properties in the constructor. For this we use `Setter`, otherwise whatever the price we give, it will take including -ve values)

```js
class mobiles {
    constructor(n, p, r){
        this.name = n;
        this.ram = r;
    }

    updateRam(uram){
        this.ram = uram;
    }

    set priceSet(p) {
        if(p <= 0){
            alert("Price cannot be less than 0");
        }
        else {
            this.price = p;
        }
    }
}

let m1 = new mobiles("realme 8", "6gb");
let m2 = new mobiles("redme", "4gb");

//to call this set function, 
m2.priceSet(16000);

console.log(m2); //mobiles {name: "redme", price: 16000, ram: "6gb"}
```

### Getters
```js
class mobiles {
    constructor(n, p, r){
        this.name = n;
        this.ram = r;
    }

    updateRam(uram){
        this.ram = uram;
    }

    set priceSet(p) {
        if(p <= 0){
            alert("Price cannot be less than 0");
        }
        else {
            this.price = p;
        }
    }

    get getName(){
        return "Mobile Name: " + this.name;
    }
}

let m1 = new mobiles("realme 8", "6gb");
let m2 = new mobiles("redme", "4gb");

//to call this get function, 
m2.priceSet(16000);
console.log(m2); //mobiles {name: "redme", price: 16000, ram: "6gb"}
m2.name; //redme
m2.getName; //Mobile Name: redme;
```
**Note:**
* Setter function takes only one argument.
* If we want to set properties for multiple things,we have to use multiple setter functions

