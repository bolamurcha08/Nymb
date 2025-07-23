document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;
  const mensagem = document.getElementById("mensagem");

  if (senha !== confirmarSenha) {
    mensagem.textContent = "As senhas não coincidem!";
    mensagem.style.color = "red";
    return;
  }

  if (!nome || !email || !senha || !confirmarSenha) {
    mensagem.textContent = "Preencha todos os campos!";
    mensagem.style.color = "red";
    return;
  }

  // Verifica se o e-mail já está cadastrado
  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const usuarioExistente = usuarios.find(user => user.email === email);

  if (usuarioExistente) {
    mensagem.textContent = "Este e-mail já está cadastrado!";
    mensagem.style.color = "red";
    return;
  }

  // Adiciona novo usuário
  usuarios.push({ nome, email, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mensagem.textContent = "Cadastro realizado com sucesso!";
  mensagem.style.color = "green";

  // Redireciona para login após 2s
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});

<script>
document.getElementById("form-cadastro").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Verifica se já existe
  if (localStorage.getItem(email)) {
    document.getElementById("mensagem").innerText = "Esse e-mail já está cadastrado.";
    return;
  }

  // Salva
  const usuario = {
    email: email,
    senha: senha,
    receitasSalvas: []
  };

  localStorage.setItem(email, JSON.stringify(usuario));
  document.getElementById("mensagem").innerText = "Conta criada com sucesso!";
});
</script>

