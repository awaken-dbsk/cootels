const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

//accordion
$(".accordion_tab").click(function(){
  $(".accordion_tab").each(function(){
    $(this).parent().removeClass("active");
    $(this).removeClass("active");
  });
  $(this).parent().addClass("active");
  $(this).addClass("active");
});


//carousel
const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-100%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-200%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('four')){
      slides.style.transform = 'translatex(-300%)';
      e.target.classList.add('active');
    } 
  }
});
