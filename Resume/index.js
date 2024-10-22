document.querySelector(".profile-info").addEventListener("click", function () {
  const profileSection = document.querySelector(".profile-section");
  if (profileSection) {
    profileSection.style.display =
      profileSection.style.display === "none" ? "block" : "none";
  }
});
