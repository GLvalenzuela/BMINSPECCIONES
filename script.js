// Función para generar el PDF y enviar por correo
function generarPDFyEnviar() {
  const botonPDF = document.getElementById('botonPDF');
  botonPDF.disabled = true;

  const contenidoHTML = document.body;
  const opciones = {
    margin: 10,
    filename: 'mi_pagina.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().from(contenidoHTML).set(opciones).outputPdf().then(function (pdf) {
    const dataURI = URL.createObjectURL(pdf);

    // Abrir el cliente de correo electrónico con el PDF adjunto
    const enlaceCorreo = `mailto:?subject=Mi%20página&body=Adjunto%20encuentras%20mi%20página%20como%20PDF.&attachment=${dataURI}`;
    window.location.href = enlaceCorreo;

    botonPDF.disabled = false;
  });
}

// Asignar evento click al botón
document.getElementById('botonPDF').addEventListener('click', generarPDFyEnviar);
