document.addEventListener("DOMContentLoaded", () => {
  console.log("Poetry Haven page loaded");

  // Mobile Navigation Toggle
  const navToggle = document.querySelector("#nav-toggle");
  const navMenu = document.querySelector("#nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("hidden");
    });
  }

  // Mobile Navigation Close
  const navClose = document.querySelector("#nav-close");
  const mobileNavMenu = document.querySelector("#mobile-nav-menu");

  if (navClose && mobileNavMenu) {
    navClose.addEventListener("click", () => {
      mobileNavMenu.classList.add("hidden");
    });
  }

  // Welcome message on successful login
  const loginForm = document.querySelector("#login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;

      if (email && password) {
        alert(`Welcome back to Poetry Haven, ${email.split("@")[0]}!`);
        loginForm.reset();
      } else {
        alert("Please fill in both email and password fields.");
      }
    });
  }

  // Create Account form submission handling
  const createAccountForm = document.querySelector("#create-account-form");
  if (createAccountForm) {
    createAccountForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.querySelector("#username").value;
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;

      if (username && email && password) {
        alert(
          `Account created successfully! Welcome to Poetry Haven, ${username}!`
        );
        createAccountForm.reset();
      } else {
        alert("Please fill in all required fields.");
      }
    });
  }

  // Search Poet form submission handling
  const searchForm = document.querySelector("#search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchQuery = document.querySelector("#search").value;

      if (searchQuery) {
        alert(`Searching for poets matching: "${searchQuery}"`);
        searchForm.reset();
      } else {
        alert("Please enter a poet's name to search.");
      }
    });
  }

  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById("scrollToTop");

  // Show or hide the scroll-to-top button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to the top when the button is clicked
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
