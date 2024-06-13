const frutas = ["Manzana", "Banana", "Pera", "Naranja", "Uva", "Melón", "Sandía", "Piña", "Kiwi", "Fresa",
    "Cereza", "Ciruela", "Mango", "Limón", "Mandarina", "Granada", "Higo", "Dátil", "Albaricoque", "Melocotón"];

// importa el módulo "utils.js" y usa el método getRandomElementFromArray adecuadamente

const utils = require('./mis-utilidades/utils');

// const frutasAlaeatorias = utils.getRandomElementFromArray();

let fruta1 = utils.getRandomElementFromArray(frutas);
let fruta2 = utils.getRandomElementFromArray(frutas);
let fruta3 = utils.getRandomElementFromArray(frutas);

console.log(fruta1, fruta2, fruta3);