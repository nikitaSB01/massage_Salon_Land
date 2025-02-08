function includeHTML() {
  document.querySelectorAll("[data-include]").forEach((el) => {
    fetch(el.dataset.include)
      .then((response) => response.text())
      .then((data) => (el.innerHTML = data))
      .catch((error) =>
        console.error(`Ошибка загрузки ${el.dataset.include}:`, error)
      );
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);

/* document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("include").forEach(async (el) => {
    const file = el.getAttribute("src");
    if (file) {
      try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Ошибка загрузки файла: ${file}`);
        const content = await response.text();
        el.outerHTML = content;
      } catch (error) {
        console.error(error);
      }
    }
  });
});
 */
