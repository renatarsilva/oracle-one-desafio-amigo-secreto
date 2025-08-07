//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
exibirTextoNaTela("h1", "Amigo Secreto da Maki");

function adicionarAmigo() {
  const nomeDoAmigo = document.getElementById("amigo");

  if (!nomeDoAmigo.value) {
    alert("digite um nome válido!");
  }

  amigos.push(nomeDoAmigo.value);
  atualizarLista();
  nomeDoAmigo.value = "";
}

function sortearAmigo() {
  if (amigos.length < 1) return;
  let numeroSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[numeroSorteado];
  let resultado = document.getElementById("resultado");
  let sorteado = document.createElement("li");
  sorteado.innerText = `O amigo escolhido é: ${amigoSorteado}`;
  resultado.appendChild(sorteado);
  console.log(resultado);
  amigos = amigos.filter((amigo) => amigo !== amigoSorteado);
  console.log("teste");
  atualizarLista();
}

localStorage.setItem("lista-de-amigos", JSON.stringify(amigos));
const amigos1 = localStorage.getItem("lista-de-amigos");

function atualizarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let amigoItem = document.createElement("li");
    amigoItem.innerText = amigos[i];
    listaAmigos.appendChild(amigoItem);
  }
}
