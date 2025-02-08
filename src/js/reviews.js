document.addEventListener("DOMContentLoaded", function () {
  const reviews = document.querySelectorAll(".review");
  let index = 0;

  function showReview(i) {
    reviews.forEach((review) => review.classList.remove("active"));
    reviews[i].classList.add("active");
  }

  document.getElementById("prevReview").addEventListener("click", function () {
    index = (index - 1 + reviews.length) % reviews.length;
    showReview(index);
  });

  document.getElementById("nextReview").addEventListener("click", function () {
    index = (index + 1) % reviews.length;
    showReview(index);
  });

  showReview(index);
});
