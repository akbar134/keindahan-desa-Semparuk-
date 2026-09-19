/* ========================================
   NAVBAR
======================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#navMenu");


/* ========================================
   MOBILE MENU
======================================== */

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", function (event) {

    event.stopPropagation();

    navMenu.classList.toggle("open");

    const isOpen =
      navMenu.classList.contains("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu" : "Buka menu"
    );

  });


  /* Tutup menu setelah link diklik */

  const navLinks =
    navMenu.querySelectorAll("a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      navMenu.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Buka menu"
      );

    });

  });


  /* Tutup menu jika klik di luar navbar */

  document.addEventListener(
    "click",
    function (event) {

      const navbar =
        document.querySelector(".navbar");

      if (!navbar) return;

      if (!navbar.contains(event.target)) {

        navMenu.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Buka menu"
        );

      }

    }
  );

}


/* ========================================
   BACK TO TOP
======================================== */

const topBtn =
  document.getElementById("topBtn");


if (topBtn) {

  window.addEventListener(
    "scroll",
    function () {

      if (window.scrollY > 500) {

        topBtn.classList.add("show");

      } else {

        topBtn.classList.remove("show");

      }

    }
  );


  topBtn.addEventListener(
    "click",
    function () {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

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
      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
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


  revealElements.forEach(function (element) {

    observer.observe(element);

  });

} else {

  revealElements.forEach(function (element) {

    element.classList.add("visible");

  });

}


/* ========================================
   NOTICE
======================================== */

const notice =
  document.getElementById("notice");


function showNotice() {

  if (!notice) return;

  notice.classList.add("show");

  setTimeout(function () {

    notice.classList.remove("show");

  }, 2800);

}


/* ========================================
   ACTIVE NAVBAR
======================================== */

function setActiveNavbar() {

  /*
     HTML menggunakan:
     <nav id="navMenu">
  */

  const links =
    document.querySelectorAll(
      "#navMenu a"
    );


  let currentPage =
    window.location.pathname
      .split("/")
      .pop();


  /*
     Jika membuka website melalui
     domain utama tanpa index.html
  */

  if (!currentPage) {

    currentPage = "index.html";

  }


  /*
     Jika URL berakhir dengan /
     anggap sebagai index.html
  */

  if (
    currentPage === "" ||
    currentPage === "/"
  ) {

    currentPage = "index.html";

  }


  links.forEach(function (link) {

    const href =
      link.getAttribute("href");


    if (!href) return;


    /*
       Abaikan anchor seperti #tentang
    */

    if (href.startsWith("#")) return;


    const linkPage =
      href.split("/").pop();


    if (linkPage === currentPage) {

      link.classList.add("active");

    } else {

      link.classList.remove("active");

    }

  });

}


/* Jalankan setelah halaman siap */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    setActiveNavbar();

  }
);


/* ========================================
   RESET MENU SAAT RESIZE
======================================== */

window.addEventListener(
  "resize",
  function () {

    /*
       Jika kembali ke desktop,
       tutup menu mobile.
    */

    if (
      window.innerWidth > 850 &&
      navMenu &&
      menuToggle
    ) {

      navMenu.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Buka menu"
      );

    }

  }
);