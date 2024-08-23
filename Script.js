// Function to load header and footer
function loadHeaderAndFooter() {
    // Load header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
      fetch('header.html')
        .then(response => response.text())
        .then(html => {
          headerContainer.innerHTML = html;
        });
    }
  
    // Load footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
      fetch('footer.html')
        .then(response => response.text())
        .then(html => {
          footerContainer.innerHTML = html;
        });
    }
  }
  
  // Call the function to load header and footer when the page loads
  window.onload = loadHeaderAndFooter;