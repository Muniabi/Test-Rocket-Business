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

    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phone-error");

    // Функция форматирования номера телефона
    const formatPhone = (value) => {
        // Убираем все нецифровые символы
        const phoneValue = value.replace(/\D+/g, "");

        // Если ничего не введено, возвращаем пустую строку
        if (phoneValue.length === 0) return "";

        // Если вводится первая цифра, добавляем только +7
        if (phoneValue.length === 1) return "+7 ";

        // Если введено более одной цифры, формируем номер
        const formattedPhone = `+7 ${phoneValue.slice(1)}`;

        const match = formattedPhone.match(
            /^(\+7)\s(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/
        );
        if (!match) return formattedPhone;

        return `${match[1]} ${match[2]}${match[3] ? " " + match[3] : ""}${
            match[4] ? " " + match[4] : ""
        }${match[5] ? " " + match[5] : ""}`;
    };

    phoneInput.addEventListener("input", () => {
        // Форматируем ввод
        phoneInput.value = formatPhone(phoneInput.value);
    });

    popupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name");
        const agree = document.getElementById("agree");
        const nameError = document.getElementById("name-error");
        const agreeError = document.getElementById("agree-error");

        // Сброс ошибок перед валидацией
        nameError.textContent = "";
        phoneError.textContent = "";
        agreeError.textContent = "";
        name.classList.remove("error");
        phoneInput.classList.remove("error");
        agree.classList.remove("error");

        // Валидация имени
        if (!name.value) {
            name.classList.add("error");
            nameError.textContent = "Поле не заполнено";
        }

        // Проверяем номер телефона
        const phoneValue = phoneInput.value.replace(/\D+/g, "");
        if (phoneValue.length < 11) {
            phoneInput.classList.add("error");
            phoneError.textContent = "Номер телефона должен содержать 11 цифр";
        }

        // Валидация согласия
        if (!agree.checked) {
            agree.classList.add("error");
            agreeError.textContent = "Необходимо согласие";
        }

        // Если все поля заполнены правильно, отправляем заявку
        if (name.value && phoneValue.length === 11 && agree.checked) {
            alert("Заявка отправлена!");
            togglePopup(false);
            popupForm.reset(); // Сбрасываем форму
            phoneInput.value = ""; // Сбрасываем значение телефона к началу
        }
    });
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
