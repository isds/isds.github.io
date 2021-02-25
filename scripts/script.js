function setAge() {
  var dataNascimento = new Date(1993,1,23);
  var diferencaEmMilisegundos = dataNascimento.getTime() - Date.now();
  var idade = Math.abs(new Date(diferencaEmMilisegundos).getUTCFullYear() - 1970)

  var idadeElement = document.getElementById('idade');
  var leading = idade < 10 ? '0' : ''
  if (idadeElement) {

    idadeElement.innerText = leading + idade;
  }

}