// Importando com "default export"
import Soma from "./math/soma.js"

// Importando com "named exports"
import { subtracao } from "./math/subtracao.js"
import {divisao, multiplicacao} from "./math/util.js"

// Testando as funções
console.log(`Soma: ${Soma(10,5)}
Subtração: ${subtracao(10,5)}
Divisão: ${divisao(10,5)}
Multiplicação: ${multiplicacao(10,5)}`);

import Potencia from "./math/potencia.js"
console.log(`Potencia: ${Potencia(10,5)}`)

import Percentual from "./math/percentual.js"
console.log(`Percentual: ${Percentual(50,15)}`)