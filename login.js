document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  // Pega os usuários cadastrados (array)
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  // Procura usuário com email e senha corretos
  const usuario = usuarios.find(user => user.email === email && user.senha === senha);

  if (!usuario) {
    mensagem.textContent = "Email ou senha incorretos!";
    mensagem.style.color = "red";
    return;
  }

  // Salva o usuário logado no localStorage (sessão)
  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

  mensagem.textContent = "Login realizado com sucesso!";
  mensagem.style.color = "green";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
});
