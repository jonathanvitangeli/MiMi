// script.js
function reemplazarVocales() {
    const textoInput = document.getElementById("inputText").value;
    const textoModificado = textoInput.replace(/[aeiouAEIOU]/g, 'i');
    document.getElementById("outputText").textContent = textoModificado;
}
