/*
A subclass inherits from the higher class. 
The subclass can make customizations to the higher class, such as adding new methods that will not be 
available on the higher class, overriding methods from the higher class or adding properties
*/

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }

    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}


class Employee extends Person {
    // Constructor takes in all args needed for the new instance, just like before
    constructor(firstName, lastName, age, position, likes) {
        // super() reaches up to the higher class and uses those args
        super(firstName, lastName, age, likes)
        // Only need to set distinct args to this class that aren't in higher class
        this.position = position
    }
    // to override, simply create the function as usual. There is no special syntax for overriding.
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }

    // Create new methods for subclasses is the same as creating an normal method
    getYearsLeft() {
        const yearsUntilRetirement = 65 - this.age
        return `${this.firstName} ${this.lastName} is eligible to retire in ${yearsUntilRetirement} years.`
    }

}

class Student extends Person {
    constructor(firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} ${this.lastName} is ${status} the class.`
        

    
    }

    updateGrade(amount) {
        this.grade += amount
    }
}

const myStudent = new Student('Rusty', 'Nails', 14, ['Getting Hammered', 'Swimming'], 78)
console.log(myStudent.getBio())
myStudent.updateGrade(-14)
console.log(myStudent.getBio())
