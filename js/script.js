window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.subheader_list'),
    menuItem = document.querySelectorAll('.subheader_list'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('subheader_list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('subheader_list_active');
        })
    })
});
$(document).ready(function(){
    $('.slider_innet').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: '<button type="button" class="slick-prev">Вперёд</button>',
        nextArrow: '<button type="button" class="slick-next">Назад</button>',
        adaptiveHeight: true
      });
      
  });
