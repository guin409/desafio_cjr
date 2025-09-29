function escolha() {
  var escolha = Math.floor(Math.random() * 10);
  let resultado;

  if (escolha % 2) {
    resultado = "A foca escolheu: " + document.querySelector(".input1").value;
  } else {
    resultado = "A foca escolheu: " + document.querySelector(".input2").value;
  }

  document.getElementById("resultadoTexto").textContent = resultado;
  document.getElementById("resultadoModal").style.display = "block";
}

document.querySelector(".close").onclick = function() {
  document.getElementById("resultadoModal").style.display = "none";
};

window.onclick = function(event) {
  let modal = document.getElementById("resultadoModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
