document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("header").innerHTML = `
    <nav class="main-nav">
      <a href="home.html">Home</a>
      <a href="get_start.html">Get Start</a> 
      <a href="tricks_tutorials.html">Tricks tutorials</a>
      <a href="history.html">History</a>
    </nav>
  `;

  const currentPage = window.location.pathname.split("/").pop() || "home.html";
  const currentLink = document.querySelector(`nav a[href="${currentPage}"]`);
  if (currentLink) {
    currentLink.classList.add("active");
  }
});
