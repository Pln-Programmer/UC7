const argumentos = process.argv.slice(2)
const n1 =parseFloat(argumentos[0])
const n2 =parseFloat(argumentos[1])






if(n1 != 0 || n2 != 0){
const divisao = n1 / n2    
console.log(`${n1} ÷ ${n2} = ${divisao}`)
}else{
    console.log('não é possivel dividir por 0')
}

const soma = n1 + n2
console.log(`${n1} + ${n2} = ${soma}`)

const subtracao = n1 - n2
console.log(`${n1} - ${n2} = ${subtracao}`)

const multiplicacao = n1 * n2
console.log(`${n1} x ${n2} = ${multiplicacao}`)
