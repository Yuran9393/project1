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
//$(document).ready(function(){
  //  $('.slider_innet').slick({
    //    slidesToShow: 2,
      //  slidesToScroll: 1,
        //autoplay: true,
        //autoplaySpeed: 2500,
        //prevArrow: '<button type="button" class="slick-prev">Вперёд</button>',
        //nextArrow: '<button type="button" class="slick-next">Назад</button>',
        //adaptiveHeight: true
      //});
      $(document).ready(function(){
       $('.slider_innet').slick({
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev">Вперёд</button>',
        nextArrow: '<button type="button" class="slick-next">Назад</button>',
     
       });
       //var a = document.getElementById('width-block');
       //var c = document.getElementById('wrapper-block');
      // a.onclick = function con(){
      // c.style.cssText = "display:block";
      // };

 //modal_call
var modal = document.getElementById('wrapper-block');
var btn = document.getElementById("width-block");
var span = document.getElementsByClassName("modal_close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//answer
var modal2 = document.getElementById('wrapper-block2');
var btn2 = document.getElementById("width-block2");
var span2 = document.getElementsByClassName("modal_close2")[0];
btn2.onclick = function() {
    modal2.style.display = "block";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
};
  });
