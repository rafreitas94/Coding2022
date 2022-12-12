// dois iguais ele tenta converter o tipo
// ele não converte nada

123 == 123
123 == '123' //true

123 === 123
123 === '123' //false

const person = {
    name: 'Raphael',
    age: 27
}

for (const key in person) {
    console.log(key);
}

const phones =  ['+55 11 91234-5678', '+55 11 98765-4321']

for (const key in phones) {
    console.log(key)
}