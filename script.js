const navbarLinks = document.querySelectorAll('.navbar a');
const pageContent = document.getElementById('page-content');

navbarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        loadPage(page);
        navbarLinks.forEach((otherLink) => {
            otherLink.classList.remove('active');
        });
        link.classList.add('active');
    });
});

function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then((response) => response.text())
        .then((html) => {
            pageContent.innerHTML = html;
        });
}

// Load the home page by default
loadPage('home');