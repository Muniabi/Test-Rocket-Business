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
