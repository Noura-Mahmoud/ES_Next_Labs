//Reflect.apply(target, thisArgument, argumentsList)
console.log(Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]));
console.log(Reflect.apply("".charAt, "Egypt", [3])); //p

//Reflect.construct(target, argumentsList)
//Reflect.construct(target, argumentsList, newTarget)
function fun1(a, b, c, d){
    console.log(a+b+c+d)
}
Reflect.construct(fun1, ["We ", "should ", "love ", "ourselves "]);//We should love ourselves 

//Reflect.defineProperty(target, propertyKey, attributes)
myObj = {Name:"Noura", Address:"Giza"}
Reflect.defineProperty(myObj, "Age", {value:23})
console.log(myObj)// Object { Name: "Noura", Address: "Giza", Age: 23}

//Reflect.deleteProperty(target, propertyKey)
console.log(Reflect.deleteProperty(myObj, "hamada")) //true
console.log(myObj) // Object { Name: "Noura", Address: "Giza", Age: 23}
console.log(Reflect.deleteProperty(myObj, "Address")) //true
console.log(myObj) // Object { Name: "Noura", Age: 23}

//Reflect.get(target, propertyKey)
//Reflect.get(target, propertyKey, receiver)
console.log(Reflect.get(myObj, "Name")) // Noura 
let obj = new Proxy(myObj, {
    get(t, prop, receiver) {
      return receiver[prop] + "ada";
    },
  });
console.log(Reflect.get(obj, "Name", myObj)) // Nouraada

//Reflect.getOwnPropertyDescriptor(target, propertyKey)
console.log(Reflect.getOwnPropertyDescriptor(myObj, "Age").value) //23

//Reflect.getPrototypeOf(target) // ????
console.log( Reflect.getPrototypeOf({})); // Object.prototype
console.log(Reflect.getPrototypeOf(Object.prototype)); // null
console.log(Reflect.getPrototypeOf({n:"nosa", a:44})); // Object.prototype
console.log(Reflect.getPrototypeOf(Object.create(null))); // null

//Reflect.has(target, propertyKey)
console.log(Reflect.has(myObj, "Age")) // true

//Reflect.isExtensible(target) //imp
console.log(Reflect.isExtensible(myObj)) //true
let x = Object.seal({})
console.log(Reflect.isExtensible(x)) //false
var y = Object.freeze({})
console.log(Reflect.isExtensible(y)) //falseط

//Reflect.ownKeys(target)
console.log(Reflect.ownKeys(myObj)) //Array [ "Name", "Age" ]

//Reflect.preventExtensions(target)
Reflect.preventExtensions(myObj)
console.log(Reflect.isExtensible(myObj)) //false

//Reflect.set(target, propertyKey, value)
//Reflect.set(target, propertyKey, value, receiver)
Reflect.set(myObj, "Name", "Mikasa")
console.log(myObj.Name) //Mikasa
Reflect.set(obj, "Name","7amada", myObj)
console.log(Reflect.get(obj, "Name", myObj)) //7amadaada

//Reflect.setPrototypeOf(target, prototype) 
console.log(Reflect.setPrototypeOf({}, Object.prototype)); // true
console.log(Reflect.setPrototypeOf({}, null)); //true
console.log(Reflect.setPrototypeOf(Object.freeze({}),null )) //false



