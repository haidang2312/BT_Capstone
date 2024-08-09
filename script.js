document.addEventListener("DOMContentLoaded", function () {
    const themeSwitcher = document.getElementById("theme-switcher");
    const body = document.body;

    themeSwitcher.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        const icon = themeSwitcher.querySelector("i");
        if (body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('rightSidebar');
    const toggleBtn = document.getElementById('toggleBtn');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('expanded');
    });
});

function toggleTextColor(element) {
    const h4 = element.querySelector('h4');
    const currentColor = h4.style.color;

    if (currentColor === 'black') {
        h4.style.color = 'white'; 
    } else {
        h4.style.color = 'black'; 
    }
}


// back to top
let mybutton = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

mybutton.addEventListener("click", topFunction);