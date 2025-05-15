window.onload = function () {
  const botao = document.getElementById("calcular");

  botao.addEventListener("click", function () {
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);
    const n4 = parseFloat(document.getElementById('nota4').value);
    const resultado = document.getElementById('resultado');

    if (
      isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)
    ) {
      resultado.textContent = "Por favor, preencha todas as notas.";
      return;
    }

    if (
      n1 < 0 || n1 > 10 ||
      n2 < 0 || n2 > 10 ||
      n3 < 0 || n3 > 10 ||
      n4 < 0 || n4 > 10
    ) {
      resultado.textContent = "As notas devem estar entre 0 e 10.";
      return;
    }

    const media = (n1 + n2 + n3 + n4) / 4;
    resultado.textContent = "A média é: " + media.toFixed(2);
  });
};
