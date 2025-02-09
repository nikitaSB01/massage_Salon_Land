/* function includeHTML() {
  document.querySelectorAll("[data-include]").forEach(async (el) => {
    const file = el.getAttribute("data-include");
    if (file) {
      try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Ошибка загрузки ${file}`);
        el.innerHTML = await response.text(); // Вставляем содержимое
      } catch (error) {
        console.error("Ошибка загрузки компонента:", error);
      }
    }
  });
}

// Выполняем функцию после загр DOM
document.addEventListener("DOMContentLoaded", includeHTML);
 */
function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");

  elements.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    if (file) {
      try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Ошибка загрузки ${file}`);
        el.innerHTML = await response.text();

        // Проверяем, загружен ли хедер, и активируем нужный пункт меню
        if (file.includes("header.html")) {
          highlightActiveMenu();
        }
      } catch (error) {
        console.error("Ошибка загрузки компонента:", error);
      }
    }
  });
}

// Функция для подсветки активного пункта меню
function highlightActiveMenu() {
  const currentPage = window.location.pathname.split("/").pop();
  const menuLinks = document.querySelectorAll("nav ul li a");

  menuLinks.forEach((link) => {
    // Убираем активный класс у всех пунктов меню
    link.classList.remove("active");

    // Проверяем, совпадает ли ссылка с текущей страницей
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

// Функция затемнения хедера при скролле
function handleHeaderScroll() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.background = "rgba(51, 51, 51, 0.9)";
    } else {
      header.style.background = "rgba(51, 51, 51, 0.7)";
    }
  });
}

// Запускаем функции после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  includeHTML();
  handleHeaderScroll();
});
