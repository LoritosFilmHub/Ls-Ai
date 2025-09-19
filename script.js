function gerarPix(valor) {
  alert("🔗 Você escolheu pagar R$ " + valor + ". O QR Code será usado para esse valor.");
  // 🚀 Aqui, futuramente, você pode integrar API de banco para QR dinâmico
}

function copiarPix() {
  const chave = document.getElementById("pix-chave").innerText;
  navigator.clipboard.writeText(chave).then(() => {
    alert("✅ Chave Pix copiada com sucesso!");
  });
}
