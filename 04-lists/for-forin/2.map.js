const service = require('./service.js');

Array.prototype.meuMap = function (callback) {
  const newArrayMaped = [];
  for (let indice = 0; indice <= this.length - 1; indice++) {
    const resultado = callback(this[indice], indice)
    newArrayMaped.push(resultado);
  }
  return newArrayMaped;
}

async function main() {
  try {
    const results = await service.obterPessoas(`a`);
    /*     const names = []; 
        results.results.forEach(function (item) {
          names.push(item.name);
        }); *//* 
const names = results.results.map(function( pessoa ){
return pessoa.name
}) */

    const names = results.results.meuMap(function (pessoa, indice) {
      return `[${indice}]${pessoa.name}`;
    })

    console.log('names', names)
  } catch (error) {
    console.log(`Deu erro`, error)
  }
}
main();