// JavaScript Document


// Función para obtener la fecha y hora actual en formato legible
function obtenerFechaHoraActual() {
  const fechaHoraActual = new Date();
  const fechaHoraFormateada = fechaHoraActual.toLocaleString();
  return fechaHoraFormateada;
}

// Función para establecer la fecha y hora actual en el campo de entrada
function mostrarFechaHoraActual() {
  const campoFechaHora = document.getElementById('campo2');
  campoFechaHora.value = obtenerFechaHoraActual();
}

// Llamar a la función para mostrar la fecha y hora actual al cargar la página
mostrarFechaHoraActual();
