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
