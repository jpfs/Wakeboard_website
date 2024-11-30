document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("footer").innerHTML = `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Quick Links</h3>
          <a href="home.html">Home</a>
          <a href="history.html">History</a>
          <a href="get_start.html">Get Start</a>
          <a href="tricks_tutorials.html">Tricks tutorials</a>
        </div>
        <div class="footer-section">
          <h3>Connect</h3>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@wakeboarding.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Wakeboarding Community. All rights reserved.</p>
      </div>
    </footer>
  `;
});
