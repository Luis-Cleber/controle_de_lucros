// Funções utilitárias para armazenar e recuperar dados do localStorage
const STORAGE_KEY = "valoresApp";

function salvarDados(dados) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

function carregarDados() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}
