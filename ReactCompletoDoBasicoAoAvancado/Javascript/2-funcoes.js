function ola(){
    return 'Olá!'
}

console.log ( ola() )

function OlaPessoa(nome) {
    return `Olá ${nome}!`
}

console.log( OlaPessoa('Joao') )

// Arrow functions

const ola2 = () => {
    return 'Olá novamente!'
}

console.log ( ola2() )

const olaPessoa2 = (nome, idade) => {
    return `Olá novamente ${nome}, sua idade é ${idade}`
}

console.log ( olaPessoa2 ('João', 20) )

const olaPessoa3 = nome => `Olá novamente ${nome}`

console.log ( olaPessoa3 ('João') )