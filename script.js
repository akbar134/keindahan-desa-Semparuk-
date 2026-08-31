const navMenu = document.getElementById("navMenu");
const menuToggle = document.getElementById("menuToggle");
const topBtn = document.getElementById("topBtn");
const notice = document.getElementById("notice");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 500);
});

topBtn.addEventListener("click", () => {
  window.scrollTo({top:0, behavior:"smooth"});
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "beranda";
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if(window.scrollY >= top) current = section.id;
  });
  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});

function showNotice(){
  notice.classList.add("show");
  setTimeout(() => notice.classList.remove("show"), 2800);
}
