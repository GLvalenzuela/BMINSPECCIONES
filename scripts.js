const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');

// Escuchar el evento change del input para manejar las imágenes seleccionadas
imageInput.addEventListener('change', handleImageSelect);

function handleImageSelect(event) {
  const selectedImages = event.target.files;

  if (selectedImages) {
    imagePreview.innerHTML = ''; // Limpiar la vista previa para cargar nuevas imágenes

    for (let i = 0; i < 4; i++) {
      if (selectedImages[i]) {
        const image = document.createElement('img');
        const reader = new FileReader();

        reader.onload = function (e) {
          image.src = e.target.result;
        };

        reader.readAsDataURL(selectedImages[i]);
        image.className = 'preview-image';
        image.addEventListener('click', () => handleChangeImage(image, selectedImages[i]));
        imagePreview.appendChild(image);
      }
    }
  }
}

function handleChangeImage(imageElement, file) {
  // Permite al usuario cambiar la imagen al hacer clic en ella
  const newImage = prompt('Ingrese la URL de la nueva imagen:');
  if (newImage) {
    imageElement.src = newImage;
    // También puedes actualizar el 'file' si deseas guardar la nueva imagen en la memoria del dispositivo.
  }
}