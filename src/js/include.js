document.addEventListener("DOMContentLoaded", function () {
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
