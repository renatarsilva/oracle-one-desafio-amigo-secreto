//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
exibirTextoNaTela("h1", "Amigo Secreto da Maki");

function adicionarAmigo() {
  console.log("O nome foi adicionado");
}

let amigos = [];
