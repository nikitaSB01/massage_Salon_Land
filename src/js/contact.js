document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  const closeModal = document.getElementById("close-modal");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы !!!

    console.log("Форма отправляется..."); // Проверяем, срабатывает ли обработчик

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(
        "https://massage-salon-server.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Ошибка при отправке формы");

      modalMessage.innerText = "Спасибо! Ваша заявка успешно отправлена.";
      modal.style.display = "flex";
      form.reset();
    } catch (error) {
      console.error("Ошибка отправки формы:", error);
      modalMessage.innerText = "Ошибка! Попробуйте позже.";
      modal.style.display = "flex";
    }
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
