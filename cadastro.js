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

  // Pega o array de usuários ou cria vazio
  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  // Verifica se email já existe
  const usuarioExistente = usuarios.find(user => user.email === email);
  if (usuarioExistente) {
    mensagem.textContent = "Este e-mail já está cadastrado!";
    mensagem.style.color = "red";
    return;
  }

  // Adiciona o novo usuário no array
  usuarios.push({ nome, email, senha, receitasSalvas: [] });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mensagem.textContent = "Cadastro realizado com sucesso!";
  mensagem.style.color = "green";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});
