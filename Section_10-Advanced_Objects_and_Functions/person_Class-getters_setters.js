class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}. `

        this.likes.forEach((like) => {
            bio += `${this.firstName} likes ${like}. `
        })
        return bio
    }

    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super()
        this.position = position
    }
    getBio() {
        //        return `${this.firstName} ${this.lastName} is a ${this.position}`
        /* Needs getter in order to get fullName and return something other than undefined */
        return `${this.fullName} is a ${this.position}`

    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super()
        this.grade = grade
    }

    updateGrade(change) {
        this.grade += change
    }

    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
}

const myKitty = new Student('Kelis', 'Ellis', 8, 71, ['meowing', 'eating', 'being mean to Rosa'])

myKitty.setName('Rosa Ellis')
// console.log(myKitty.getBio())
myKitty.setName('Bob McCann')
myKitty.updateGrade(-20)
// console.log(myKitty.getBio())


const workerCat = new Employee('Kelis', 'Ellis', 8, 'Deputy Meower', ['meowing', 'eating', 'being mean to Rosa'])
console.log(workerCat.getBio())
workerCat.setName('Rosa Ellis')
console.log(workerCat.getBio())

/* Above works. Is uses fullName, which doesn't actually exist. fullName is a computed property*/
