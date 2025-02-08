// Функция для загрузки компонентов (header и footer)
async function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  for (let el of elements) {
    let file = el.getAttribute("data-include");
    try {
      let response = await fetch(file);
      if (response.ok) {
        el.innerHTML = await response.text();
      } else {
        console.error("Ошибка загрузки:", file);
      }
    } catch (err) {
      console.error("Ошибка:", err);
    }
  }
}

// Загружаем header и footer при загрузке страницы
document.addEventListener("DOMContentLoaded", includeHTML);
