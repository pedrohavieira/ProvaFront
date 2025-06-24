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
