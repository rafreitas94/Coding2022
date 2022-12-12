var a = 10
a = 'Raphael'

let b = 10
b = 'Raphael'

const c = 10

for (var i = 1; i <= 3; i++) {
    console.log(i)
}

for (let i = 1; i <= 3; i++) {
    console.log(i)
}

const arr = ['Raphael', 'Felipe', 'Gustavo']

const arr2 = [1, true, { name: 'Raphael'}, 'string']

const person = {
    name: 'Raphael',
    age: 27,
    phones: ['+55 11 91234-5678', '+55 11 98765-4321'],
    address: {
        street: 'Rua X',
        number: 42
    }
}

person.name
person.address.number
