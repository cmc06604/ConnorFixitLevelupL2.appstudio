// gets the varibles of name, state, and temp
let firstName = prompt("Please enter your first name")
let userState = prompt("Please enter your state in 2 letter form")
let temp = parseInt(prompt("Please enter a temperature in Fahrenheit"))

//puts messages in an array
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

//Makes user's state capitalized
var State = userState.toUpperCase()

//Makes the first name's first letter capitialized
let nameCap = firstName.charAt(0).toUpperCase() + firstName.slice(1);

// Gives the output based off the information given with an If-Else
if (userState == "NE" && temp < 32) {
   NSB.MsgBox(messages[0])
} else if (State == "NE" && temp > 32 && temp < 50) {
   NSB.MsgBox(messages[1])
} else if (State == "FL" && temp > 32 && temp < 50) {
   NSB.MsgBox(messages[2])
} else if (State == "FL" && temp > 50 && temp < 70) {
   NSB.MsgBox(messages[3])
} else {
   NSB.MsgBox("Try again with inputting the information")
}