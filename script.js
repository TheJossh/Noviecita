var swiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
let index = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveCarousel() {
  index = (index + 1) % totalItems;
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 3000);  // Cambia la imagen cada 3 segundos

const swiper = new Swiper('.carousel', {
  slidesPerView: 'auto', // Ajusta el número de slides visibles
  spaceBetween: 10, // Espaciado entre los slides
  loop: true, // Habilitar el bucle
  breakpoints: {
    768: {
      slidesPerView: 1, // Para pantallas pequeñas, solo una imagen por vez
    },
    1024: {
      slidesPerView: 2, // Para pantallas grandes, muestra dos imágenes
    }
  }
});
