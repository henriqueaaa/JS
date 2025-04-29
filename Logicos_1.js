let temDinheiro = false;
let estaEnsolarado = false;
let carroEstaNaGaragem = false;

let resultadoE = '#1 (AND) - Vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado; 
console.log(resultadoE);

let resutladoOU = '#2 (OR) - Vai pro shopping? ';
resutladoOU += estaEnsolarado || carroEstaNaGaragem
console.log(resutladoOU)

console.log(true != true);
console.log(true != false);
console.log(false != true);
console.log(false !== false);

console.log('Não verdadeiro ' + !true);
console.log('Não falso: ' + !false);
