function sayHi(firstName, lastName) {
  // console.log('Oi, ' + firstName + ' ' + lastName + '!')

  console.log(`Oi, ${firstName} ${lastName}!`);
}

// const sayHi = function sayHi(firstName, lastName) {
//   console.log(`Oi, ${firstName} ${lastName}!`);
// };

function multiply(num, mult) {
  return num * mult;
}

function double(num) {
  return multiply(num, 2);
}

function incrementBy(increment) {
    return function(num) {
        return num * increment
    }
}

const addTwo = incrementBy(2)

const sayHello = (firstName, lastName) => {
    console.log(`Olá, ${firstName} ${lastName}!`);
}

function log() {
    console.log(this)
}

const log2 = () => {
    console.log(this)
}

const person = {
    name: 'Raphael',
    age: 27,
    log: () => {
        console.log(this)
    }
}

const person2 = {
    name: 'Raphael',
    age: 27,
    log: function() {
        console.log(this)
    }
}

console.log(addTwo);
console.log(double(2));

person.log()
person2.log()
sayHello("Raphael", "Freitas");
sayHi("Raphael", "Freitas");
