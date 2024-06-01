divResult = document.getElementById('result');

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener el valor del campo de texto 'codigo'
    const codigoValue = document.getElementById('codigo').value;

    // Introducir el valor en el div con id 'result'
    document.getElementById('result').innerText = codigoValue;
});

