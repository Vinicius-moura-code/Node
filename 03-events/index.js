const EventEmitter = require('events');
class MeuEmissor extends EventEmitter{

}
const meuEmeissor = new MeuEmissor()
const nomeEvento = 'usuario:click';
meuEmeissor.on(nomeEvento, function(click){
  Console.log('O usuario clicou', click);
})

/* meuEmeissor.emit(nomeEvento, 'na barra de rolar')
meuEmeissor.emit(nomeEvento, 'no ok')

let count = 0;
setInterval(function(){
  meuEmeissor.emit(nomeEvento, 'no ok' + (count++))
}, 1000) */

const stdin = process.openStdin();
stdin.addListener('data', function (value){
  console.log(`Voce digitou ${value.toString().trim()}`)
})