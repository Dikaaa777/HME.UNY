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
window.addEventListener("load", revealOnScroll);

// POPUP
function closePopup(){
  document.getElementById("welcomePopup").style.display = "none";
}

// POPUP ONCE
window.onload = function(){
  if(localStorage.getItem("visited")){
    document.getElementById("welcomePopup").style.display = "none";
  } else {
    localStorage.setItem("visited", "true");
  }
}

// SLIDER DUMMY
const slider = document.getElementById("slider");

const data = [
  {judul:"Workshop AI", isi:"Belajar AI dasar"},
  {judul:"Pelatihan PLC", isi:"Skill industri"},
  {judul:"Pengabdian", isi:"Teknologi untuk desa"}
];

data.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("slide");

  div.innerHTML = `
    <h3>${item.judul}</h3>
    <p>${item.isi}</p>
  `;

  slider.appendChild(div);
});
