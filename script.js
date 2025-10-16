// Atualiza automaticamente o ano no rodapé
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ano").textContent = new Date().getFullYear();
});

// Envio de formulário de doação
const formDoacao = document.getElementById("formDoacao");
if (formDoacao) {
  formDoacao.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const tipo = document.getElementById("tipoDoacao").value;
    alert(`Obrigado, ${nome}! Seu cadastro para ${tipo} foi recebido.`);
    formDoacao.reset();
  });
}

// Envio de formulário de contato
const formContato = document.getElementById("formContato");
if (formContato) {
  formContato.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Obrigado pelo contato ❤️");
    formContato.reset();
  });
}
