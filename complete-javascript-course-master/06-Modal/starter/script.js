'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// функция для открытия модалки
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
// Функция для закрытия модалки и ее вызов по крестику и по аутклику
const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// цикл для добавления ивентЛистенеров для нескольких кнопок с одинаковым классом.
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);
};

// Ивент листенеры для закрытия модалки по клику на крестик и по аутклику/оверлей
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Нажатие на Esc, закрытие модалки
document.addEventListener("keydown", function(e){
    if (e.key == "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
    }
});