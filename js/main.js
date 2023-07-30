import "../../node_modules/focus-visible/dist/focus-visible";
import "../scss/main.scss";
import "../index.html";
import Swiper from "swiper/bundle";

//Инициализация Swiper для каждого слайдера с различными настройками
document.addEventListener("DOMContentLoaded", function () {
  // Инициализация Swiper только при ширине экрана меньше 720px
  if (window.innerWidth < 768) {
    // Инициализация первого слайдера
    const brandsSwiper = new Swiper(".brands__swiper", {
      // Настройки для первого слайдера
      pagination: {
        el: ".brands__pagination",
        clickable: true,
      },
      spaceBetween: 16,
    });
     // Инициализация второго слайдера
     const repairSwiper = new Swiper(".repair__swiper", {
      // Настройки для второго слайдера
      pagination: {
        el: ".repair__pagination",
        clickable: true,
      },
      spaceBetween: 16,
    });
    // Инициализация первого слайдера
    const priceSwiper = new Swiper(".price__swiper", {
      // Настройки для первого слайдера
      pagination: {
        el: ".price__pagination",
        clickable: true,
      },
      spaceBetween: 16,
    });
  }
});

// aside
const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('.aside');
const closeAside = document.querySelector('.close-aside');
const asideOverlay = document.querySelector('.aside__overlay');

hamburger.addEventListener('click', () => {
  aside.classList.add('active');
});
closeAside.addEventListener('click', () => {
  aside.classList.remove('active');
});
asideOverlay.addEventListener('click', () => {
  aside.classList.remove('active');
})

// fitback modal

const headerFidbackOpen = document.querySelector('.header-fitback');
const asideFidbackOpen = document.querySelector('.aside-fitback');
const fidbackModal = document.querySelector('.modal-fidback');
const fidbackClose = document.querySelector('.modal__close_fidback');

headerFidbackOpen.addEventListener('click', () => {
  fidbackModal.classList.add('open');
});
asideFidbackOpen.addEventListener('click', () => {
  fidbackModal.classList.add('open');
});
fidbackClose.addEventListener('click', () => {
  fidbackModal.classList.remove('open');
});
 
// call modal

const headerCallOpen = document.querySelector('.header-call');
const asideCallOpen = document.querySelector('.aside-call');
const callModal = document.querySelector('.modal-call');
const callClose = document.querySelector('.modal__close_call');

headerCallOpen.addEventListener('click', () => {
  callModal.classList.add('open');
});
asideCallOpen.addEventListener('click', () => {
  callModal.classList.add('open');
});
callClose.addEventListener('click', () => {
  callModal.classList.remove('open');
});

// services
const btnServices = document.querySelector(".services__click_show");
const textHidden1 = document.querySelector(".services__text_hidden1");
const textHidden2 = document.querySelector(".services__text_hidden2");

btnServices.addEventListener("click", handleServicesClick);

function handleServicesClick() {
  if (btnServices.textContent === "Читать далее") {
    textHidden1.style.display = 'block';
    textHidden2.style.display = 'inline';
    btnServices.textContent = "Скрыть";
    btnServices.classList.remove("click_show");
    btnServices.classList.add("click_hide");
  } else {
    textHidden1.style.display = 'none';
    textHidden2.style.display = 'none';
    btnServices.textContent = "Читать далее";
    btnServices.classList.remove("click_hide");
    btnServices.classList.add("click_show");
  }
}

// Получение ссылки на кнопку с классом "brands__click_show"
const btnBrand = document.querySelector(".brands__click_show");
// Получение массива карточек с классом "swiper-slide"
const cardsBrand = Array.from(document.querySelectorAll(".brands__slide"));

// Добавление обработчиков события "resize" и "click"
window.addEventListener("resize", handleBrandResize);
btnBrand.addEventListener("click", handleBrandClick);

// Функция обработчика события "resize"
function handleBrandResize() {
  // Проверка ширины окна и вызов соответствующей функции
  if (window.innerWidth > 767 && window.innerWidth < 1120) {
    responseBrand1();
  }
  if (window.innerWidth > 1119) {
    responseBrand2();
  }
}

// Функция для обработки первого условия ширины окна
function responseBrand1() {
  // Применение класса "hidden" ко всем элементам массива карточек
  cardsBrand.forEach((item, index) => {
    item.classList.add("is--hidden");
    // Удаление класса "hidden" у элементов с индексом меньше 6
    if (index < 6) {
      item.classList.remove("is--hidden");
    }
  });
}

// Функция для обработки второго условия ширины окна
function responseBrand2() {
  // Применение класса "hidden" ко всем элементам массива карточек
  cardsBrand.forEach((item, index) => {
    item.classList.add("is--hidden");
    // Удаление класса "hidden" у элементов с индексом меньше 8
    if (index < 8) {
      item.classList.remove("is--hidden");
    }
  });
}

// Функция обработчика события "click" на кнопке
function handleBrandClick() {
  // Проверка ширины окна и скрытие/отображение элементов
  if (window.innerWidth > 1119) {
    cardsBrand.forEach((item, index) => {
      // Скрытие/отображение элементов с индексом больше или равным 8
      if (index >= 8) {
        item.classList.toggle("is--hidden");
        btnBrand.classList.toggle("click_hide");
      }
    });
  }
  if (window.innerWidth > 767 && window.innerWidth < 1120) {
    cardsBrand.forEach((item, index) => {
      // Скрытие/отображение элементов с индексом больше или равным 6
      if (index >= 6) {
        item.classList.toggle("is--hidden");
        btnBrand.classList.toggle("click_hide");
      }
    });
  }

  // Изменение текста кнопки в зависимости от текущего состояния
  if (btnBrand.textContent === "Показать все") {
    btnBrand.textContent = "Скрыть";
  } else {
    btnBrand.textContent = "Показать все";
  }
}

// Вызов функций при загрузке страницы
handleBrandResize();

//==========================================================================
//==========================================================================

const btnRepair = document.querySelector(".repair__click_show");
const cardsRepair = Array.from(document.querySelectorAll(".repair__slide"));

window.addEventListener("resize", handleRepairResize);
btnRepair.addEventListener("click", handleRepairClick);

function handleRepairResize() {
  if (window.innerWidth > 767 && window.innerWidth < 1120) {
    responseRepair1();
  }
  if (window.innerWidth > 1119) {
    responseRepair2();
  }
}

function responseRepair1() {
  cardsRepair.forEach((item, index) => {
    item.classList.add("is--hidden");
    if (index < 3) {
      item.classList.remove("is--hidden");
    }
  });
}

function responseRepair2() {
  cardsRepair.forEach((item, index) => {
    item.classList.add("is--hidden");
    if (index < 4) {
      item.classList.remove("is--hidden");
    }
  });
}

function handleRepairClick() {
  if (window.innerWidth > 1119) {
    cardsRepair.forEach((item, index) => {
      if (index >= 4) {
        item.classList.toggle("is--hidden");
        // btnRepair.classList.toggle("click_hide");
      }
    });
  }
  if (window.innerWidth > 767 && window.innerWidth < 1120) {
    cardsRepair.forEach((item, index) => {
      if (index >= 3) {
        item.classList.toggle("is--hidden");
        // btnRepair.classList.toggle("click_hide");
      }
    });
  }

  if (btnRepair.textContent === "Показать все") {
    btnRepair.textContent = "Скрыть";
    btnRepair.classList.remove("click_show");
    btnRepair.classList.add("click_hide");
  } else {
    btnRepair.textContent = "Показать все";
    btnRepair.classList.remove("click_hide");
    btnRepair.classList.add("click_show");
  }
}

handleRepairResize();

