function registrarExperiencia() {
    // Captura o nome e a experiência do usuário
    var nomeUsuario = document.getElementById("nome").value;
    var emailUsuario = document.getElementById("email").value;

    // Exibe uma mensagem personalizada para o usuário
    var mensagem = `Olá ${nomeUsuario}, obrigado por entrar em contato conosco, vamos entrar em contato com o e-mail: ${emailUsuario} com mais informações!`
    alert(mensagem);
  }

  let docTitle = document.title;

  window.addEventListener("blur", function() {
    document.title = "come back and register!";
  });
  
  window.addEventListener("focus", function() {
    document.title = docTitle;
  });