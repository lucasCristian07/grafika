// pra deixar as imagens de fundo escuras
const images = document.querySelectorAll('.kkk img');

images.forEach((image) => {
  image.addEventListener('mouseover', () => {
    images.forEach((otherImage) => {
      if (otherImage !== image) {
        otherImage.style.opacity = 0.5;
      }
    });
  });

  image.addEventListener('mouseout', () => {
    images.forEach((otherImage) => {
      if (otherImage !== image) {
        otherImage.style.opacity = 1;
      }
    });
  });
});