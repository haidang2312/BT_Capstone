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



  