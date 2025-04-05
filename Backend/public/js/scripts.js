document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("shorten-form");
  form.addEventListener("submit", (e) => {
    alert("Your URL is being shortened!");
  });
});
