const accountId = 144552
let accountEmail = "naeem@mna.com"
var accountPassword = "12345"
accouuntCity = "Karachi"

// accountId = 2 // not allowed

accountEmail = "naeem@fk.com"
accountPassword = "12342134"
accouuntCity =  "Lahore"

console.table([accountId, accountEmail, accountPassword, accouuntCity])

// prefer not to use var becasue of an issue in block scope  and functional scope