document
    .querySelector(".header__button")
    .addEventListener("click", function () {
        const video = document.querySelector(".header__video");
        const preview = document.querySelector(".header__preview");
        video.style.display = "block";
        video.src =
            "https://www.youtube.com/embed/FA4N4hoJTZ4?si=mpdF5Fy1pUHLWX31";
        preview.style.display = "none";
    });

document.addEventListener("DOMContentLoaded", () => {
    const popupOverlay = document.getElementById("popup-overlay");
    const popupClose = document.getElementById("popup-close");
    const buttons = document.querySelectorAll(".button.btn");
    const popupForm = document.getElementById("popup-form");

    // Открытие pop-up при нажатии на кнопку "Оставить заявку"
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            popupOverlay.style.display = "flex";
            document.body.classList.add("no-scroll");
        });
    });

    // Закрытие pop-up
    popupClose.addEventListener("click", () => {
        popupOverlay.style.display = "none";
        document.body.classList.remove("no-scroll");
    });

    // Закрытие pop-up при клике на затемнённую область
    popupOverlay.addEventListener("click", (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = "none";
            document.body.classList.remove("no-scroll");
        }
    });

    // Валидация и отправка формы
    popupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Проверяем, что все обязательные поля заполнены
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const agree = document.getElementById("agree").checked;

        if (name && phone && agree) {
            alert("Заявка отправлена!");
            popupOverlay.style.display = "none";
            document.body.classList.remove("no-scroll");
        } else {
            alert("Заполните все поля и примите условия обработки данных.");
        }
    });
});
