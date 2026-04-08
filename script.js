// NAVBAR
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
window.addEventListener("load", revealOnScroll);

// SLIDER
const slider = document.getElementById("slider");

if(slider){
  const data = [
    {judul:"Workshop AI", isi:"Belajar AI dasar"},
    {judul:"Pelatihan PLC", isi:"Skill industri"},
    {judul:"Pengabdian", isi:"Teknologi desa"}
  ];

  data.forEach(item => {
    const div = document.createElement("div");

    div.innerHTML = `
      <b>${item.judul}</b><br>
      ${item.isi}
    `;

    slider.appendChild(div);
  });
}
