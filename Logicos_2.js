const t1 = true;
const t2 = true;

let comprarTV50 = t1 && t2;
console.log('Vamos comprar a TV 50"? ' , comprarTV50,); // AND

let comprarTV32 = t1 !== t2;
console.log('Vamos comprar a TV 32"? ' , comprarTV32,); // XOR 

let tomarSorvete = t1 || t2;
console.log('Vamos comprar a sorvete"? ' , tomarSorvete,); // OR

let ficarEmCasa = !tomarSorvete;
console.log('Vamos ficar em casa?', ficarEmCasa)



//console.log('"')
//console.log("'")
