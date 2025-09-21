const inputValor = document.getElementById("valor");
const inputData = document.getElementById("data");
const btnSalvar = document.getElementById("btnSalvar");
const resumoDiario = document.getElementById("resumoDiario");
const listaLancamentos = document.getElementById("listaLancamentos");
const dataInicio = document.getElementById("dataInicio");
const dataFim = document.getElementById("dataFim");
const btnCalcular = document.getElementById("btnCalcular");
const resultadoIntervalo = document.getElementById("resultadoIntervalo");

let dados = carregarDados();

// Salvar lançamento
btnSalvar.addEventListener("click", () => {
  const valor = parseFloat(inputValor.value);
  const data = inputData.value;

  if (!valor || !data) {
    alert("Preencha o valor e a data!");
    return;
  }

  dados.push({ valor, data });
  salvarDados(dados);

  inputValor.value = "";
  inputData.value = "";

  atualizarUI();
});

// Calcular intervalo
btnCalcular.addEventListener("click", () => {
  const inicio = new Date(dataInicio.value);
  const fim = new Date(dataFim.value);

  if (!inicio || !fim) {
    alert("Selecione as duas datas!");
    return;
  }

  const total = dados
    .filter(d => {
      const dataLanc = new Date(d.data);
      return dataLanc >= inicio && dataLanc <= fim;
    })
    .reduce((soma, d) => soma + d.valor, 0);

  resultadoIntervalo.textContent = `Total do período: R$ ${total.toFixed(2)}`;
});

// Atualizar interface
function atualizarUI() {
  // Lançamentos
  listaLancamentos.innerHTML = "";
  dados.forEach(d => {
    const li = document.createElement("li");
    li.textContent = `${d.data} - R$ ${d.valor.toFixed(2)}`;
    listaLancamentos.appendChild(li);
  });

  // Resumo diário
  resumoDiario.innerHTML = "";
  const agrupados = {};

  dados.forEach(d => {
    if (!agrupados[d.data]) agrupados[d.data] = 0;
    agrupados[d.data] += d.valor;
  });

  for (let data in agrupados) {
    const li = document.createElement("li");
    li.textContent = `${data} — R$ ${agrupados[data].toFixed(2)}`;
    resumoDiario.appendChild(li);
  }
}

atualizarUI();
