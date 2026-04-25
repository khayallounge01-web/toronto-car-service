(function () {
  const header = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mainMenu = document.getElementById("mainMenu");
  const dropdownButtons = document.querySelectorAll(".dropdown-button");
  const revealItems = document.querySelectorAll(".reveal");

  function onScroll() {
    if (!header) {
      return;
    }

    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  function closeMenu() {
    if (!menuToggle || !mainMenu) {
      return;
    }

    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    mainMenu.classList.remove("active");
    document.body.classList.remove("menu-open");

    document.querySelectorAll(".dropdown.open").forEach(function (dropdown) {
      dropdown.classList.remove("open");
    });
  }

  function setupMobileMenu() {
    if (!menuToggle || !mainMenu) {
      return;
    }

    menuToggle.addEventListener("click", function () {
      const isOpen = mainMenu.classList.toggle("active");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    mainMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1020) {
        closeMenu();
      }
    });
  }

  function setupDropdowns() {
    dropdownButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        const dropdown = button.closest(".dropdown");

        if (!dropdown) {
          return;
        }

        dropdown.classList.toggle("open");
      });
    });
  }

  function setupReveal() {
    if (!revealItems.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach(function (item) {
        item.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  onScroll();
  setupMobileMenu();
  setupDropdowns();
  setupReveal();
})();