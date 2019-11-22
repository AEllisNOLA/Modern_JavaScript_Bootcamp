/* 
Custom Getters/Setters allow customization when someone sets an object property or reads its value.
*/

const data = {
    locations: [],
    set location(value) {
        // NOTE: _location is used instead of location because 'location' is already taken.
        // A console.log(data) shows { loction: [Getter/Setter] }
        this._location = value.trim()
        this.locations.push(this._location)
    },
    /* You must use set or get before function name */
    get location() {
        return this._location
    }

}

// code that uses data object
data.location = '    New Orleans        '  // 
data.location = 'San Diego    ' // overwrites New Orleans but pushes New Orleans to locations array. We have a locations history!
console.log(data)

/*
Good for sanitizing/validating data:
1) You could write code on the assignment that uses trim, for instance.
2) Or make a method on the object that uses trim to clean up the input.

Both these rely on the person using the object to make an effort, though. Either use trim or call the function
*/