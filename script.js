// NAVBAR EFFECT
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// REVEAL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// FIX: langsung aktif saat load
window.addEventListener("load", revealOnScroll);
