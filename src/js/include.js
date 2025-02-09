function includeHTML() {
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

// Выполняем функцию после загрузки DOM
document.addEventListener("DOMContentLoaded", includeHTML);
