var myObj = {Name:"Mikasa", Address:"Giza", [Symbol.iterator]:function *(){
    var keys = Object.keys(myObj);
    for( let i =0 ; i<keys.length;i++)
    {
        if(typeof this[keys[i]]!= "function" )
            yield `Key: ${keys[i]}, Value: ${myObj[keys[i]]}`
    }
}}

for(item of myObj)
{
    console.log(item)
}
//#region as prop
// var myObj = {Name:"Mikasa", Address:"Giza", data:function *(){
//     var keys = Object.keys(myObj);
//     for( let i =0 ; i<keys.length;i++)
//     {
//         if(typeof this[keys[i]]!= "function" )
//             yield `Key: ${keys[i]}, Value: ${myObj[keys[i]]}`
//     }
// }}

// for(item of myObj.data())
// {
//     console.log(item)
// }
//#endregion