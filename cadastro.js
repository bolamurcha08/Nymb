document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;
  const mensagem = document.getElementById("mensagem");

  if (!nome || !email || !senha || !confirmarSenha) {
    mensagem.textContent = "Preencha todos os campos!";
    mensagem.style.color = "red";
    return;
  }

  if (senha !== confirmarSenha) {
    mensagem.textContent = "As senhas não coincidem!";
    mensagem.style.color = "red";
    return;
  }

  // Verifica se o e-mail já está cadastrado
  if (localStorage.getItem(email)) {
    mensagem.textContent = "Este e-mail já está cadastrado!";
    mensagem.style.color = "red";
    return;
  }

  // Cria e salva o novo usuário
  const novoUsuario = {
    nome,
    email,
    senha,
    receitasSalvas: []  // já preparado para salvar receitas depois
  };

  localStorage.setItem(email, JSON.stringify(novoUsuario));
  mensagem.textContent = "Cadastro realizado com sucesso!";
  mensagem.style.color = "green";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});

