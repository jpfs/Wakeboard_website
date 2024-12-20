document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("header").innerHTML = `
    <nav class="main-nav">
      <div class="nav-content">
        <div class="nav-center">
          <button class="nav-toggle" aria-label="Toggle navigation">
            <span class="hamburger"></span>
          </button>
          <div class="nav-menu">
            <a href="home.html">Home</a>
            <a href="get_start.html">Get Start</a> 
            <a href="tricks_tutorials.html">Tricks tutorials</a>
            <a href="history.html">History</a>
          </div>
        </div>
      </div>
    </nav>
  `;

  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navToggle.classList.toggle("active");
  });

  const currentPage = window.location.pathname.split("/").pop() || "home.html";
  const currentLink = document.querySelector(`nav a[href="${currentPage}"]`);
  if (currentLink) {
    currentLink.classList.add("active");
  }
});
