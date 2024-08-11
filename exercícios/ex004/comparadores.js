let x = 2;
let y = 'string de teste';

console.log(`01: ${x > 1}`);
console.log (`02: ${x > 10}`);

console.log(`03: ${y === 'string de teste'}`);
console.log(`04: ${y !== 'texto de teste'}`); /*A exclamação indica diferença (Se for diferente o resultado será true)*/

console.log(`05: ${x >= 2}`)
console.log(`06: ${x >= 1}`)
console.log(`07: ${x >= 3}`)
console.log(`08: ${x <= 3}`)
console.log(`09: ${x < 10}`)

console.log(`10: ${10 === 10}`)
console.log(`11: ${10 === '10'}`) /*Esse será false pois um é uma string e o outro é um número, logo eles são iguais*/
console.log(`12: ${10 == 10}`)
console.log(`13: ${10 == '10'}`) /*Quando usamos apenas 2 == ele vai comparar apenas o valor, e não o tipo do dado, deferente mente quando usamos 3 ===*/