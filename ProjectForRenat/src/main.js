document.addEventListener("DOMContentLoaded", function () {
    const previews = document.querySelectorAll(".Preview");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    previews.forEach(preview => observer.observe(preview));
});

function ViewCla() {
    window.location.href = "cla45s.html";
}



function toggleMenu() {
    const menu = document.querySelector('.fullscreen-menu');
    const body = document.body;

    menu.classList.toggle('open');
    body.classList.toggle('no-scroll'); // Отключаем/включаем скролл
}

// Закрываем меню при клике вне его
document.addEventListener('click', function (event) {
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.fullscreen-menu');

    if (!burger.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('open');
    }
    //Закрываем меню при клике вне его
    document.addEventListener('click', function (event) {
        const burger = document.querySelector('.burger-menu');
        const menu = document.querySelector('.fullscreen-menu');
        const closeBtn = document.querySelector('.close-menu');

        if (!burger.contains(event.target) && !menu.contains(event.target) && event.target !== closeBtn) {
            menu.classList.remove('open');
            document.body.classList.remove('no-scroll'); // Включаем скролл при закрытии
        }
    })
});
