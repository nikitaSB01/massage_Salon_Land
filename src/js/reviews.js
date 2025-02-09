document.addEventListener("DOMContentLoaded", function () {
  const reviewsContainer = document.querySelector(".reviews-items");
  const reviews = document.querySelectorAll(".review");
  const prevBtn = document.getElementById("prevReview");
  const nextBtn = document.getElementById("nextReview");

  let index = 0;
  const visibleReviews = 3;
  const totalGroups = Math.ceil(reviews.length / visibleReviews);

  function updateReviews() {
    const offset = -index * (reviews[0].offsetWidth + 20) * visibleReviews;
    reviewsContainer.style.transform = `translateX(${offset}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < totalGroups - 1) {
      index++;
      updateReviews();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateReviews();
    }
  });

  updateReviews();
});
