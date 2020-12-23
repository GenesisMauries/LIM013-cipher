import cipher from './cipher.js';
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const outputMsg = document.getElementById('outputMsg');
// Cifrar
document.getElementById('encode').addEventListener('click', () => {
  const offset = parseInt(document.getElementById('displacementValue').value, 10) || '';
  const str = document.getElementById('inputText').value || '';
  if (!offset || !str) {
    alert('Favor de llenar los campos de codigo y mensaje');
  } else {
    outputText.value = cipher.encode(offset, str);
  }
  if (inputText.value !== '') {
    outputMsg.innerText = 'Mensaje cifrado';
  }
});
// Descifrar
document.getElementById('decode').addEventListener('click', () => {
  const offset = parseInt(document.getElementById('displacementValue').value, 10) || '';
  const str = document.getElementById('inputText').value || '';
  if (!offset || !str) {
    alert('Favor de llenar los campos de codigo y mensaje');
  } else {
    outputText.value = cipher.encode(offset, str);
  }
  // Poniendo el valor que retorna encode() como valor del input
  outputText.value = cipher.decode(offset, str);
  // Si el input no está vacío retornar el mensaje de descifrado
  if (inputText.value !== '') {
    outputMsg.innerText = 'Mensaje descifrado';
  }
});
// Evento del botón borrar
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => {
  inputText.value = '';
  outputText.value = '';
  document.getElementById('displacementValue').value = 0;
  outputMsg.innerText = 'Resultado';
});
// Copiar
document.getElementById('copy').addEventListener('click', () => {
  // Copy de texto en textarea
  const aux = document.createElement('input');
  aux.setAttribute('value', outputText.value);
  document.body.appendChild(aux);
  // Se selecciona el contenido del campo y Copiando el texto seleccionado
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);
  // Aviso copy
  const notification = document.createElement('div');
  notification.classList.add('jstext');
  // Insertando al DOM el mensaje
  notification.innerHTML = 'Mensaje copiado';
  document.body.appendChild(notification);
  // Confirmo durante 1.2segs y bye
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 1200);
});