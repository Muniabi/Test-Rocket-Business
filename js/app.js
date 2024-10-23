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

    // Открытие pop-up
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

    // Закрытие pop-up при клике на область
    popupOverlay.addEventListener("click", (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = "none";
            document.body.classList.remove("no-scroll");
        }
    });

    const phoneInput = document.getElementById("phone");
    const nameInput = document.getElementById("name");
    const phoneError = document.getElementById("phone-error");
    const nameError = document.getElementById("name-error");

    form.addEventListener("submit", (e) => {
        let isValid = true;

        if (
            !/^\+?[78][-(]?\d{3}[-)]?\d{3}[-]?\d{2}[-]?\d{2}$/.test(
                phoneInput.value
            )
        ) {
            phoneError.textContent = "Неверный формат телефона";
            phoneError.style.display = "block";
            isValid = false;
        } else {
            phoneError.style.display = "none";
        }

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Поле не заполнено";
            nameError.style.display = "block";
            isValid = false;
        } else {
            nameError.style.display = "none";
        }

        if (!isValid) {
            e.preventDefault();
        }
    });
});

const swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
