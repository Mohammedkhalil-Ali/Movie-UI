
var swiper = new Swiper(".ra", {
    slidesPerView: 5.3,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sbn",
      prevEl: ".sbp",
    },
  });

  var swiper = new Swiper(".ma", {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });
  
 
  var body=document.querySelector("body");
  var imgmenu=document.querySelector(".imgmenu");
  var imgclose=document.querySelector(".imgclose");
  var checkclick=document.querySelector(".checkclick");
  var nav1=document.querySelector(".nav1");
  var ulnav=document.querySelector(".ulnav");
  var navigation12=document.querySelector(".navigation12");
  var kurtafilm=document.querySelector(".kurtaFilm");
  var wara=document.querySelector("#wara");

    
      imgmenu.addEventListener("click",()=>{
      imgmenu.classList.add("hide");
      imgclose.classList.add("show");
      nav1.classList.add("navbro");
      navigation12.classList.add("navigation123");
      ulnav.classList.add("show");
      }); 

     imgclose.addEventListener("click",()=>{
      imgclose.classList.remove("show");
      imgmenu.classList.remove("hide");
      nav1.classList.remove("navbro");
      navigation12.classList.remove("navigation123");
      ulnav.classList.add("hide");
    })
let w = window.innerWidth;


  
      