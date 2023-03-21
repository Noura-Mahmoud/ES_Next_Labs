var strOverriden = {
    [Symbol.replace] : function(caller){
        len = String(caller).length
        if (len>15) return String(caller).substring(0,15)+"..."
        else return caller;
    }
}
console.log("abcdefghijklmnopq".replace(/f/g, 5))
console.log("abcdefghijklmnopq".replace(strOverriden, 5))
// "abcdefghijklmnopq".replace(/f/g, 5)
// "abcdefghijklmnopq".replace(strOverriden, 5)
