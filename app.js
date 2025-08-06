//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
exibirTextoNaTela("h1", "Amigo Secreto da Maki");

function adicionarAmigo() {
  const nomeDoAmigo = document.getElementById("amigo");
  amigos.push(nomeDoAmigo.value);
  nomeDoAmigo.value = "";
  console.log(`amigos: ${amigos}`);
  console.log(nomeDoAmigo);
}

function sortearAmigo() {
  let numeroSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[numeroSorteado];

  let resultado = document.getElementById("resultado");
  let sorteado = document.createElement("li");

  sorteado.innerText = amigoSorteado;
  resultado.appendChild(sorteado);
  console.log(resultado);
  amigos.filter((amigo) => amigo !== amigoSorteado);
}

localStorage.setItem("lista-de-amigos", JSON.stringify(amigos));
const amigos1 = localStorage.getItem("lista-de-amigos");

let listaAmigos = document.getElementById("listaAmigos");
