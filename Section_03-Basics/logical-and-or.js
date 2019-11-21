let temp = -4

if (temp >= 65 && temp <= 90) {
    console.log('It is nice outside')
} else if (temp > 110 || temp <= 20) {
    console.log("Meh, stay inside and play video games.")
} else {
    console.log("Do whatcha wanna. What the hell do I care?")
}

let isGuestOneVegan = true
let isGuestTwoVegan = true

// offer only vegan menu
// offer up some vegan options but also some regular
// offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Here is our special totally vegan menu!")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("I brought you one vegan menu and one regular menu")
} else {
    console.log("Order whatever the hell you want!")
}
