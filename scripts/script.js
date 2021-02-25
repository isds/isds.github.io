function setAge() {
  var dataNascimento = new Date(1993,1,23);
  var agora = new Date();
  var diferencaEmMilisegundos = agora.getTime() - dataNascimento.getTime();
  var idade = Math.floor(diferencaEmMilisegundos / (1000 * 60 * 60 * 24 * 365.25));

  var idadeElement = document.getElementById('idade');
  var leading = idade < 10 ? '0' : ''
  if (idadeElement) {

    idadeElement.innerText = leading + idade;
  }

}