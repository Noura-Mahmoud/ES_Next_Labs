var obj = {name: "hamada", address: "Giza", age: 24}
var handler = {
    set(target, property, value){
        if(target.hasOwnProperty(property))
        {
            switch(property)
            {
                case "name":
                    if (value.length == 7)
                        target[property] = value
                    else console.log("name must be a string of 7 characters!!")
                    break;
                case "address":
                    if (typeof value == "string")
                        target[property] = value
                    else console.log("address must be a string value")
                    break;
                case "age":
                    if (typeof value == "number" && value <60 && value>25)
                        target[property] = value
                    else console.log("age must be a  number  between 25 and 60")
                    break;
            }
        }
    }
}

var myProxy = new Proxy (obj, handler)
myProxy.name="sddsdfsdfsf"  // name must be a string of 7 characters!!
myProxy.name="1234567" // pass

myProxy.age = "s" //age must be a  number  between 25 and 60
console.log()
myProxy.age=20  // age must be a  number  between 25 and 60
myProxy.age=30  //pass

myProxy.address=12  // address must be a string value
myProxy.address="cairo" //"cairo" 