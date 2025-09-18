function copiarPix() {
  const chave = document.getElementById("pix-chave").innerText;
  navigator.clipboard.writeText(chave).then(() => {
    alert("✅ Chave Pix copiada com sucesso!");
  }).catch(err => {
    alert("❌ Erro ao copiar Pix: " + err);
  });
}
