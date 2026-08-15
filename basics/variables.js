const accountId = 14432
let accountEmail = "arpita@gmail.com"
var accountPassword = "Jaipur"
accountCity = "Jaipur"
let accountState;
//accountId = 2 // not allowed change const value

accountEmail = "nila@gmail.com"
accountPassword = "212121"
accountCity = "bengaluru"
console.log(accountId)

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])