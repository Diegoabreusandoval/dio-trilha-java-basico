/*Faça um programa para calcular o valor de uma viagem.

Voce tera 3 variaveis. Sendo elas:
-1 preco do combustivel;
-2 gasto medio de combustivel do carro por KM;
-3 Distancia em KM da viagem;

*/
console.log(`olá`);

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const DistanciaEmKm = 100;

const litrosConsumidos = DistanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto)
