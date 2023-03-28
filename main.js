/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

var allRadios = document.getElementsByName('nome');
var booRadio;
var x = 0;
for (x = 0; x < allRadios.length; x++) {

  allRadios[x].onclick = function() {
    if (booRadio == this) {
      this.checked = false;
      booRadio = null;
    } else {
      booRadio = this;
    }
  };
}


var allRadios = document.getElementsByName('nomeC');
var booRadio;
var x = 0;
for (x = 0; x < allRadios.length; x++) {

  allRadios[x].onclick = function() {
    if (booRadio == this) {
      this.checked = false;
      booRadio = null;
    } else {
      booRadio = this;
    }
  };
}



$(function () {
  $("input[name='nomeL']").click(function () {
      if ($("#verificarLogin").is(":checked")) {
          $("#FieldCidade").removeAttr("disabled");
          $("#Segunda").removeAttr("disabled");
          $("#Segunda2").removeAttr("disabled");
          $("#Terca").removeAttr("disabled");
          $("#Terca2").removeAttr("disabled");
          $("#Quarta").removeAttr("disabled");
          $("#Quarta2").removeAttr("disabled");
          $("#Quinta").removeAttr("disabled");
          $("#Quinta2").removeAttr("disabled");
          $("#Sexta").removeAttr("disabled");
          $("#Sexta2").removeAttr("disabled");
          $("#nulo").attr("selected", "selected");
          
      } else {
          $('input[id=nulo]').attr('checked', true);
          $('input[name=FieldCidade]').attr('checked', false);
          $('input[name=nome]').attr('checked', false);
          $("#FieldCidade").attr("disabled", "disabled");
          $("#Segunda").attr("disabled", "disabled");
          $("#Segunda2").attr("disabled", "disabled");
          $("#Terca").attr("disabled", "disabled");
          $("#Terca2").attr("disabled", "disabled");
          $("#Quarta").attr("disabled", "disabled");
          $("#Quarta2").attr("disabled", "disabled");
          $("#Quinta").attr("disabled", "disabled");
          $("#Quinta2").attr("disabled", "disabled");
          $("#Sexta").attr("disabled", "disabled");
          $("#Sexta2").attr("disabled", "disabled");
      }
  });
});

function disable_select() {
    $("#FieldCidade").prop('disabled', true);
    $('input[name=nome]').prop('disabled', true);
}

