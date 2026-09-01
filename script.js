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

document.addEventListener("DOMContentLoaded", () => {


  /* ========================================
     MOBILE MENU
  ======================================== */

  const menuToggle =
    document.getElementById("menuToggle");

  const navMenu =
    document.getElementById("navMenu");


  if (menuToggle && navMenu) {

    menuToggle.addEventListener(
      "click",
      () => {

        navMenu.classList.toggle("open");

        const isOpen =
          navMenu.classList.contains("open");


        menuToggle.setAttribute(
          "aria-label",
          isOpen
            ? "Tutup menu"
            : "Buka menu"
        );

      }
    );


    const navLinks =
      navMenu.querySelectorAll("a");


    navLinks.forEach(link => {

      link.addEventListener(
        "click",
        () => {

          navMenu.classList.remove("open");

          menuToggle.setAttribute(
            "aria-label",
            "Buka menu"
          );

        }
      );

    });

  }


  /* ========================================
     YEAR
  ======================================== */

  const year =
    document.getElementById("year");


  if (year) {

    year.textContent =
      new Date().getFullYear();

  }


  /* ========================================
     SCROLL REVEAL
  ======================================== */

  const revealElements =
    document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "active"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(element => {

      observer.observe(element);

    });

  } else {

    revealElements.forEach(element => {

      element.classList.add("active");

    });

  }


  /* ========================================
     BACK TO TOP
  ======================================== */

  const topBtn =
    document.getElementById("topBtn");


  if (topBtn) {

    window.addEventListener(
      "scroll",
      () => {

        if (window.scrollY > 500) {

          topBtn.classList.add("show");

        } else {

          topBtn.classList.remove("show");

        }

      }
    );


    topBtn.addEventListener(
      "click",
      () => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }

});