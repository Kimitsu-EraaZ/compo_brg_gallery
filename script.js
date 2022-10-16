let allGridItems = [...document.getElementsByClassName("grid-item")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

const openPopup = (e) => {
    let clickedImageSrc = e.target.src;
    popupBg.classList.add("active");
    popupImg.src = clickedImageSrc;
};

const closePopup = () => {
    popupBg.classList.remove("active");
};

allGridItems.forEach((el) => el.addEventListener("click", openPopup));

popupImg.addEventListener("click", (e) => e.stopPropagation());
popupBg.addEventListener("click", closePopup);