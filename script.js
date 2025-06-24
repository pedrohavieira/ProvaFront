// Alternar entre "páginas"
const buttons = document.querySelectorAll('nav button');
const pages = document.querySelectorAll('.page');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const pageId = btn.getAttribute('data-page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
  });
});
// Cadastro e exibição
let necessidades = [];

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const instituicao = document.getElementById("instituicao").value.trim();
  const tipoAjuda = document.getElementById("tipoAjuda").value;
  const titulo = document.getElementById("titulo").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const cep = document.getElementById("cep").value.trim();
  const rua = document.getElementById("rua").value;
  const bairro = document.getElementById("bairro").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value;
  const contato = document.getElementById("contato").value.trim();

  if (!instituicao || !tipoAjuda || !titulo || !descricao || !cep || !contato) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  const nova = { instituicao, tipoAjuda, titulo, descricao, rua, bairro, cidade, estado, contato };
  necessidades.push(nova);
  alert("Necessidade cadastrada com sucesso!");
  this.reset();
  exibirNecessidades(necessidades);
});
document.getElementById("cep").addEventListener("blur", async function () {
    const cep = this.value.replace(/\D/g, "");
    if (cep.length !== 8) return;
  
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) throw new Error();
  
      document.getElementById("rua").value = data.logradouro;
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("cidade").value = data.localidade;
      document.getElementById("estado").value = data.uf;
    } catch {
      alert("CEP inválido ou não encontrado.");
    }
  });
  function exibirNecessidades(lista) {
    const container = document.getElementById("listaNecessidades");
    container.innerHTML = "";
  
    lista.forEach(n => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${n.titulo}</h3>
        <p><strong>Instituição:</strong> ${n.instituicao}</p>
        <p><strong>Tipo de Ajuda:</strong> ${n.tipoAjuda}</p>
        <p>${n.descricao}</p>
        <p><strong>Endereço:</strong> ${n.rua}, ${n.bairro} - ${n.cidade}/${n.estado}</p>
        <p><strong>Contato:</strong> ${n.contato}</p>
      `;
      container.appendChild(card);
    });
  }
  document.getElementById("busca").addEventListener("input", aplicarFiltros);
document.getElementById("filtroTipo").addEventListener("change", aplicarFiltros);

function aplicarFiltros() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const tipo = document.getElementById("filtroTipo").value;

  const filtradas = necessidades.filter(n => {
    const matchBusca = n.titulo.toLowerCase().includes(busca) || n.descricao.toLowerCase().includes(busca);
    const matchTipo = !tipo || n.tipoAjuda === tipo;
    return matchBusca && matchTipo;
  });

  exibirNecessidades(filtradas);
}
