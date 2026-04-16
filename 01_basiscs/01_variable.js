const accountId = 1234567890
let accountEmail = "kavisamrat@gmail.com"
var accountPassword = "123345"
accountCity="Delhi"
// accountId=5 // not allowed because accountId is a constant variable
accountEmail="abc@gmail.com"  // allowed because accountEmail is a let variable
accountPassword="abc123" // allowed because accountPassword is a var variable
accountCity="Mumbai" // allowed because accountCity is a var variable

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
