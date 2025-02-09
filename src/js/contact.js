document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

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

      alert("Спасибо! Ваша заявка отправлена.");
      form.reset();
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Ошибка! Попробуйте позже.");
    }
  });
});
