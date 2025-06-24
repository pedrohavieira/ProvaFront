# Conexão Voluntária

Plataforma web para conectar ONGs a voluntários de forma simples, rápida e eficiente. Permite cadastrar necessidades de instituições, visualizar e filtrar as demandas cadastradas.

---

## Funcionalidades

- Navegação entre páginas: Home, Cadastro e Visualizar.
- Formulário para cadastro de necessidades com validação dos campos obrigatórios.
- Preenchimento automático de endereço via CEP utilizando a API pública do ViaCEP.
- Armazenamento temporário dos dados cadastrados em memória (sessão atual).
- Exibição dinâmica das necessidades cadastradas em cards estilizados.
- Busca por texto em título e descrição das necessidades.
- Filtro por tipo de ajuda para facilitar a busca.
- Design responsivo, adaptando-se a diferentes tamanhos de tela.

---

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação.
- **CSS3**: Estilização com foco em acessibilidade e responsividade.
- **JavaScript (ES6+)**: Manipulação do DOM, comunicação com API externa, validação de formulários e lógica de filtragem.

---

## Estrutura do Projeto

| Arquivo       | Descrição                                              |
| ------------- | ----------------------------------------------------- |
| `index.html`  | Estrutura principal e navegação entre páginas         |
| `style.css`   | Estilos e layout da aplicação, incluindo responsividade|
| `script.js`   | Lógica de navegação, cadastro, busca, filtro e integração com API ViaCEP |

---