// Add interactivity if needed
document.addEventListener('DOMContentLoaded', function () {
  console.log('Website loaded!');
});

function loadPartial(id, url) {
      fetch(url)
        .then(res => res.text())
        .then(html => document.getElementById(id).innerHTML = html);
    }

    function loadPage(url) {
      if (url === 'home') {
        document.getElementById("content-area").innerHTML = `
          <div class='container'>
            <h1 class='display-5 fw-bold'>Transforming Businesses with Innovative IT Solutions</h1>
            <p class='lead'>Expert IT consulting for infrastructure, databases, and digital transformation.</p>
            <p class='mb-4'>Book an appointment at <strong>+1 (306) 914-7817</strong></p>
            <a href='#' class='btn btn-primary btn-lg' onclick="loadPage('contact.html'); return false;">Get a Free Consultation</a>
          </div>`;
        return;
      }
      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error("Page not found");
          return res.text();
        })
        .then(data => {
          document.getElementById("content-area").innerHTML = data;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch(err => {
          document.getElementById("content-area").innerHTML = "<div class='container py-5'><h2>Page not found</h2><p>Sorry, we couldn’t load the page.</p></div>";
        });
    }

// Add hover dropdown functionality for larger screens
 document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.hover-dropdown');

    if (window.innerWidth >= 992 && dropdown) {
      const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
      const dropdownInstance = bootstrap.Dropdown.getOrCreateInstance(toggle);

      dropdown.addEventListener('mouseenter', () => dropdownInstance.show());
      dropdown.addEventListener('mouseleave', () => dropdownInstance.hide());
    }
  });