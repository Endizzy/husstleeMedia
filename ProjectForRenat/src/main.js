document.addEventListener("DOMContentLoaded", function () {
    const previews = document.querySelectorAll(".Preview");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    previews.forEach((preview) => observer.observe(preview));
});
// window.addEventListener("load", function() {
//     document.querySelectorAll("img").forEach(img => {
//         new Image().src = img.src;
//     });
// });


function ViewCla() {
    window.location.href = "cla45s.html";
}
function ViewMcLauren() {
    window.location.href = "mclaren750s.html";
}
function ViewPorsche() {
    window.location.href = "Porsche.html";
}
function ViewBentley() {
    window.location.href = "bentley.html";
}
function ViewM3() {
    window.location.href = "m3.html";
}
function ViewM5() {
    window.location.href = "m5.html";
}
function ViewClaPhoto() {
    window.location.href = "cla45sPhoto.html";
}
function ViewAdrenalineRush() {
    window.location.href = "adrenalinerush.html";
}
function ViewMclaurenPhoto() {
    window.location.href = "mclaurenPhoto.html";
}
function ViewPorschePhoto() {
    window.location.href = "porschePhoto.html";
}
function ViewBentleyPhoto() {
    window.location.href = "bentleyPhoto.html";
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


