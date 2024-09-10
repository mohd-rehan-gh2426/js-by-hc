const accountId = 14453
let accountEmail = "Rehan@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // Not allowed

accountEmail = "Rh@Rhgmail.com"
accountPassword = "45678"
accountCity = "Indore"

console.log(accountId)

/* 

Prefer not to use var 
because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])