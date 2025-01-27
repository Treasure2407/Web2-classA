// Handle "Request Invite" Button Click
const requestButtons = document.querySelectorAll('button a[href="./index.html"]');
requestButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Request Invite button clicked! Redirecting...');
    window.location.href = './index.html';
  });
});

// Smooth Scrolling for Anchor Links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});


// Dynamically Change Footer Year
const footerText = document.querySelector('footer p');
if (footerText) {
  const currentYear = new Date().getFullYear();
  footerText.textContent = `© Easybank. All Rights Reserved ${currentYear}`;
}