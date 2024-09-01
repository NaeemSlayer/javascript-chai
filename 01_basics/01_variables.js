const accountId = 144553
let accountEmail = "naeem@google.com"
var accountPassword = '12345'
accountCity = 'Karachi'
let accountState;

// accountId = 2 // not allowed

accountEmail = 'mn@mn.com'
accountPassword ="234234"
accountCity = "Lahore"

console.log(accountId);

/*
Prefer not use var 
because of issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
