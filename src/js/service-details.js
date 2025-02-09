document.addEventListener("DOMContentLoaded", function () {
  const serviceData = {
    "thai-massage": {
      title: "Тайский массаж",
      image: "./public/images/thai-massage.avif",
      description:
        "Тайский массаж помогает восстановить баланс тела, улучшает гибкость и снимает напряжение.",
    },
    "relax-massage": {
      title: "Расслабляющий массаж",
      image: "./public/images/relax-massage.jpeg",
      description:
        "Расслабляющий массаж — идеальный способ избавиться от стресса и улучшить общее самочувствие.",
    },
    "aroma-massage": {
      title: "Ароматерапия",
      image: "./public/images/aroma-massage.webp",
      description:
        "Ароматерапия сочетает массаж и натуральные эфирные масла для максимального расслабления.",
    },
  };

  // Получаем параметр `service` из URL
  const urlParams = new URLSearchParams(window.location.search);
  const serviceKey = urlParams.get("service");

  // Если услуга найдена, заполняем контент
  if (serviceData[serviceKey]) {
    document.getElementById("service-title").textContent =
      serviceData[serviceKey].title;
    document.getElementById("service-image").src =
      serviceData[serviceKey].image;
    document.getElementById("service-description").textContent =
      serviceData[serviceKey].description;
  } else {
    // Если услуга не найдена, показываем ошибку
    document.getElementById("service-details").innerHTML =
      "<h2>Услуга не найдена</h2><a href='index.html' class='back-button'>Вернуться на главную</a>";
  }
});
