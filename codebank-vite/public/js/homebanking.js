const codebank = document.getElementById("codebank");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("");
    circulo.classList.toggle("prendido");
});

codebank.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const searchIcon = document.querySelector('.search-icon');
  const searchForm = document.querySelector('.search-form');

  searchIcon.addEventListener('click', function() {
      searchForm.classList.toggle('show-search');
  });

  // Cerrar el formulario de búsqueda si se hace clic fuera de él
  document.addEventListener('click', function(e) {
      if (!searchForm.contains(e.target) && !searchIcon.contains(e.target)) {
          searchForm.classList.remove('show-search');
      }
  });
});

document.querySelector('.search-icon').addEventListener('click', function() {
  const searchBar = document.querySelector('.search-bar');
  searchBar.classList.toggle('show');
});

