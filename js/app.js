// video player
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

// popup
document.addEventListener("DOMContentLoaded", () => {
    const popupOverlay = document.getElementById("popup-overlay");
    const popupClose = document.getElementById("popup-close");
    const buttons = document.querySelectorAll(".btn");
    const popupForm = document.getElementById("popup-form");

    const togglePopup = (show) => {
        popupOverlay.style.display = show ? "flex" : "none";
        document.body.classList.toggle("no-scroll", show);
    };

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            togglePopup(true);
        });
    });

    popupClose.addEventListener("click", () => {
        togglePopup(false);
    });

    popupOverlay.addEventListener("click", (e) => {
        if (e.target === popupOverlay) {
            togglePopup(false);
        }
    });

    popupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name");
        const phone = document.getElementById("phone");
        const agree = document.getElementById("agree");

        const nameError = document.querySelector("#name + p");
        const phoneInput = document.querySelector("#phone");
        const phoneError = document.querySelector("#phone-error");

        phone.addEventListener("input", () => {
            const phoneValue = phone.value.replace(/\D+/g, "");
            const formattedPhoneValue = `+7 (${phoneValue.substring(
                0,
                3
            )})-${phoneValue.substring(3, 6)}-${phoneValue.substring(
                6,
                8
            )}-${phoneValue.substring(8, 10)}`;
            if (phoneValue.length < 10) {
                phoneError.textContent =
                    "Номер телефона должен содержать минимум 10 цифр";
                phoneInput.classList.add("error");
            } else {
                phoneError.textContent = "";
                phoneInput.classList.remove("error");
            }
            phone.value = formattedPhoneValue;
        });
        if (
            name.value &&
            phone.value &&
            phone.value.match(/^\d{10}$/) &&
            agree.checked
        ) {
            alert("Заявка отправлена!");
            togglePopup(false);
        } else {
            if (!name.value) {
                name.classList.add("error");
                nameError.classList.add("error-message");
                nameError.textContent = "Поле не заполнено";
            } else {
                name.classList.remove("error");
                nameError.classList.remove("error-message");
                nameError.textContent = "";
            }

            if (!phone.value) {
                phone.classList.add("error");
                phoneError.textContent = "Поле не заполнено";
            } else if (
                !phone.value.match(/^\+7 \(\d{3}\)-\d{3}-\d{2}-\d{2}$/)
            ) {
                phone.classList.add("error");
                phoneError.textContent = "Некорректный номер";
            } else {
                phone.classList.remove("error");
                phoneError.textContent = "";
            }

            if (!agree.checked) {
                agree.classList.add("error");
                agreeError.textContent = "Необходимо согласие";
            } else {
                agree.classList.remove("error");
                agreeError.textContent = "";
            }
        }
        const form = document.querySelector("#popup-form");
        form.addEventListener("submit", function (event) {
            if (phoneError.textContent !== "") {
                event.preventDefault(); // Предотвращаем отправку формы, если есть ошибка
            }
        });
    });

    // Валидация формы при отправке
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
